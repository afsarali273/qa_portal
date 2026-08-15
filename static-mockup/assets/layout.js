export const icon=(name,className='')=>`<i class="ui-icon ${className}" data-lucide="${name}" aria-hidden="true"></i>`;

export const nav = [
  ['overview','index.html','layout-dashboard','Overview'], ['applications','applications.html','panels-top-left','Applications'],
  ['coverage','coverage.html','chart-no-axes-column-increasing','Coverage'], ['operations','operations.html','circle-play','Test operations'],
  ['manual','manual-qa.html','clipboard-check','Manual QA'], ['automation','automation.html','bot','Automation'],
  ['management','management.html','briefcase-business','Management'], ['integrations','integrations.html','plug-zap','Integrations'],
  ['help','help.html','circle-help','Guide']
];

export function shell(page, common, content) {
  const primary = nav.slice(0,6).map(item => navLink(item,page)).join('');
  const admin = nav.slice(6).map(item => navLink(item,page)).join('');
  return `<div class="app-shell">
    <aside class="sidebar" aria-label="Primary navigation">
      <a class="brand" href="index.html" aria-label="Sands QA Central home"><i class="brand-mark"></i><span><strong>SANDS</strong><small>QA CENTRAL</small></span></a>
      <nav class="nav-list"><div class="nav-label">Quality workspace</div>${primary}<div class="nav-label">Insights & systems</div>${admin}</nav>
      <div class="sidebar-foot"><i class="sync-dot"></i><div><strong>All systems connected</strong><small>Portfolio refreshed ${formatTimestamp(common.generatedAt)}</small></div></div>
    </aside>
    <section class="workspace">
      <header class="topbar"><button class="mobile-menu" aria-label="Open navigation">${icon('menu')}</button>
        <button class="searchbox global-search" aria-label="Search portal">${icon('search')}<span>Search runs, Jira issues, test cases…</span><kbd>⌘ K</kbd></button>
        <div class="topbar-actions"><button class="icon-button theme-toggle" data-theme-toggle aria-label="Switch to dark mode" aria-pressed="false"><span class="theme-icon theme-icon-moon">${icon('moon')}</span><span class="theme-icon theme-icon-sun">${icon('sun')}</span></button><button class="icon-button notifications-button" aria-label="Notifications">${icon('bell')}<i class="notification-dot"></i></button><div class="avatar">${common.user.initials}</div><div class="user-meta"><strong>${common.user.name}</strong><span>${common.user.role}</span></div></div>
      </header>${content}
    </section></div>`;
}

function navLink([id,url,iconName,label],page){return `<a class="nav-item ${id===page?'active':''}" href="${url}" ${id===page?'aria-current="page"':''}><span aria-hidden="true">${icon(iconName)}</span>${label}</a>`}

function formatTimestamp(value){
  const date=new Date(value);
  if(Number.isNaN(date.getTime())) return value;
  const datePart=new Intl.DateTimeFormat('en-SG',{day:'numeric',month:'short',year:'numeric',timeZone:'Asia/Singapore'}).format(date);
  const timePart=new Intl.DateTimeFormat('en-SG',{hour:'numeric',minute:'2-digit',hour12:true,timeZone:'Asia/Singapore'}).format(date).toUpperCase();
  return `${datePart} · ${timePart} SGT`;
}

export const heading = (eyebrow,title,copy,actions='') => `<header class="page-heading"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p></div><div class="heading-actions">${actions}</div></header>`;
export const button = (label,kind='secondary',action='') => {const clean=label.replace(/^[＋▶◇]\s*/,''),iconName=inferButtonIcon(clean);return `<button class="button ${kind}" ${action?`data-action="${action}"`:''}>${iconName?icon(iconName,'button-icon'):''}<span>${clean}</span></button>`};
export const filters = (applications=[]) => `<section class="filter-bar" aria-label="Portfolio filters"><div class="filter-group"><label for="team-filter">Team</label><select id="team-filter"><option>All teams</option><option>MBS</option><option>SCL</option></select></div><div class="filter-group"><label for="app-filter">Application</label><select id="app-filter"><option>All applications</option>${applications.map(x=>`<option>${typeof x==='string'?x:x.name}</option>`).join('')}</select></div><div class="filter-group"><label for="period-filter">Period</label><select id="period-filter"><option>Last 30 days</option><option>This week</option><option>This quarter</option><option>This year</option></select></div><button class="filter-reset">${icon('rotate-ccw')}Reset</button><span class="data-freshness"><i></i>Mock data · refreshed 2 min ago</span></section>`;
export const metrics = items => `<section class="metric-grid">${items.map((m,i)=>`<article class="metric-card" style="--metric-color:${['#260552','#8e774d','#0085a1','#64a70b'][i%4]};--metric-tint:${['#eee9f5','#f4eee3','#e5f5f7','#edf6df'][i%4]}"><div class="metric-top"><span class="metric-icon">${icon(['gauge','layers-3','workflow','badge-check'][i%4])}</span>${m.delta?`<span class="trend up">${m.delta}</span>`:''}</div><div class="metric-label">${m.label}</div><div class="metric-value">${m.value}</div><div class="metric-bottom">${m.detail||m.context||'Portfolio total'}</div></article>`).join('')}</section>`;
export const badge = value => `<span class="badge ${slug(value)}"><i></i>${value}</span>`;
export const progress = (value,label='') => `<div class="progress-wrap" aria-label="${label||value+' percent'}"><div class="progress-track"><i style="width:${value}%"></i></div><strong>${value}%</strong></div>`;
export const table = (caption, headers, rows) => `<div class="table-wrap"><table><caption class="sr-only">${caption}</caption><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
export const cardHead = (kicker,title,aside='') => `<div class="card-head"><div><span class="card-kicker">${kicker}</span><h2>${title}</h2></div>${aside}</div>`;
export const slug = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g,'-');
export const bars = (labels, values) => {const max=Math.max(...values);return `<div class="bar-list">${labels.map((l,i)=>`<div class="bar-row"><span>${l}</span><div><i style="width:${values[i]/max*100}%"></i></div><strong>${values[i].toLocaleString()}</strong></div>`).join('')}</div>`};

function inferButtonIcon(label){const text=label.toLowerCase();if(text.includes('run')||text.includes('trigger'))return 'play';if(text.includes('export')||text.includes('download'))return 'download';if(text.includes('add')||text.includes('new'))return 'plus';if(text.includes('refresh'))return 'refresh-cw';if(text.includes('calendar')||text.includes('schedule'))return 'calendar-days';if(text.includes('copilot')||text.includes('ai'))return 'sparkles';if(text.includes('guide'))return 'book-open';if(text.includes('zephyr')||text.includes('jira'))return 'external-link';if(text.includes('manage'))return 'settings-2';return ''}
