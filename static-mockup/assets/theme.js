(function(){
  const storageKey='sands-qa-theme';
  const root=document.documentElement;

  function readTheme(){
    try{return localStorage.getItem(storageKey)==='dark'?'dark':'light'}catch{return 'light'}
  }

  function syncButtons(theme){
    document.querySelectorAll('[data-theme-toggle]').forEach(button=>{
      const dark=theme==='dark';
      button.setAttribute('aria-pressed',String(dark));
      button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
      button.setAttribute('title',dark?'Switch to light mode':'Switch to dark mode');
    });
  }

  function applyTheme(theme,persist=true){
    const next=theme==='dark'?'dark':'light';
    root.dataset.theme=next;
    root.style.colorScheme=next;
    if(persist){try{localStorage.setItem(storageKey,next)}catch{}}
    syncButtons(next);
    dispatchEvent(new CustomEvent('qa-theme-change',{detail:{theme:next}}));
  }

  function bind(scope=document){
    syncButtons(root.dataset.theme||'light');
    scope.querySelectorAll('[data-theme-toggle]').forEach(button=>{
      if(button.dataset.themeBound)return;
      button.dataset.themeBound='true';
      button.addEventListener('click',()=>applyTheme(root.dataset.theme==='dark'?'light':'dark'));
    });
  }

  applyTheme(readTheme(),false);
  window.qaTheme={apply:applyTheme,bind};
  addEventListener('DOMContentLoaded',()=>bind());
})();
