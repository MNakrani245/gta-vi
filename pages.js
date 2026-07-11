const pageHeader=document.querySelector('.header');
const updatePageHeader=()=>pageHeader?.classList.toggle('scrolled',window.scrollY>30);
updatePageHeader();
window.addEventListener('scroll',updatePageHeader,{passive:true});
const menuButton=document.querySelector('[data-menu]');
const navigation=document.querySelector('[data-links]');
if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}))}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const countdown=document.querySelector('[data-countdown]');
if(countdown){const target=new Date(2026,10,19,0,0,0);const tick=()=>{const seconds=Math.max(0,Math.floor((target-Date.now())/1000));const values={days:Math.floor(seconds/86400),hours:Math.floor(seconds%86400/3600),minutes:Math.floor(seconds%3600/60),seconds:seconds%60};Object.entries(values).forEach(([key,value])=>{const el=countdown.querySelector(`[data-${key}]`);if(el)el.textContent=String(value).padStart(key==='days'?3:2,'0')})};tick();setInterval(tick,1000)}
