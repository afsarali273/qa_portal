#!/usr/bin/env python3
"""Validate that the QA portal can be published as a self-contained static site."""

from __future__ import annotations

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1] / "static-mockup"
EXTERNAL_SCHEMES = {"http", "https", "mailto", "tel", "data", "javascript"}


class AssetParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        for attribute in ("href", "src"):
            value = values.get(attribute)
            if value:
                self.references.append(value)


def local_target(source: Path, value: str) -> Path | None:
    parsed = urlsplit(value)
    if parsed.scheme in EXTERNAL_SCHEMES or parsed.netloc or not parsed.path:
        return None
    if parsed.path.startswith("/"):
        raise ValueError(
            f"{source.relative_to(ROOT)} uses root-relative path {value!r}; "
            "this breaks GitHub Pages project hosting"
        )
    return (source.parent / unquote(parsed.path)).resolve()


def validate_html(errors: list[str]) -> None:
    pages = sorted(ROOT.glob("*.html"))
    if not pages or not (ROOT / "index.html").is_file():
        errors.append("Static site must contain index.html")
        return

    for page in pages:
        page_text = page.read_text(encoding="utf-8")
        if 'type="module"' in page_text:
            errors.append(
                f"{page.relative_to(ROOT)} uses an ES module script, which cannot "
                "run reliably through file://"
            )
        parser = AssetParser()
        parser.feed(page_text)
        for reference in parser.references:
            try:
                target = local_target(page, reference)
            except ValueError as error:
                errors.append(str(error))
                continue
            if target is not None and not target.is_file():
                errors.append(
                    f"{page.relative_to(ROOT)} references missing file {reference!r}"
                )


def validate_javascript(errors: list[str]) -> None:
    for script in sorted((ROOT / "assets").glob("*.js")):
        text = script.read_text(encoding="utf-8")
        for module_path in re.findall(r"from\s+['\"]([^'\"]+)['\"]", text):
            if module_path.startswith("."):
                target = (script.parent / module_path).resolve()
                if not target.is_file():
                    errors.append(
                        f"{script.relative_to(ROOT)} imports missing module {module_path!r}"
                    )


def validate_json(errors: list[str]) -> None:
    data_files = sorted((ROOT / "data").glob("*.json"))
    if not data_files:
        errors.append("Static site contains no JSON datasets")
        return
    for data_file in data_files:
        try:
            json.loads(data_file.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as error:
            errors.append(f"Invalid JSON in {data_file.relative_to(ROOT)}: {error}")


def main() -> int:
    errors: list[str] = []
    validate_html(errors)
    validate_javascript(errors)
    validate_json(errors)
    offline_bundle = ROOT / "assets" / "app.static.js"
    if not offline_bundle.is_file():
        errors.append("Missing assets/app.static.js offline bundle")
    elif "globalThis.QA_STATIC_DATA=" not in offline_bundle.read_text(encoding="utf-8"):
        errors.append("Offline bundle does not contain embedded mock data")
    if errors:
        print("Static-site validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    page_count = len(list(ROOT.glob("*.html")))
    data_count = len(list((ROOT / "data").glob("*.json")))
    print(f"Static-site validation passed: {page_count} pages, {data_count} datasets")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
