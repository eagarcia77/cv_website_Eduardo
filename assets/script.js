const languageButton=document.getElementById('languageToggle');
const menuButton=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
const nodes=[...document.querySelectorAll('[data-es][data-en]')];
let language=localStorage.getItem('portfolioLanguage')||'es';

function applyLanguage(lang){
  language=lang;
  document.documentElement.lang=lang;
  nodes.forEach(el=>{el.textContent=el.dataset[lang]});
  if(languageButton){
    languageButton.textContent=lang==='es'?'English':'Español';
    languageButton.setAttribute('aria-label',lang==='es'?'Change language to English':'Cambiar idioma a español');
  }
  document.title=lang==='es'?'Eduardo A. García Rodríguez | Portafolio profesional':'Eduardo A. García Rodríguez | Professional Portfolio';
  localStorage.setItem('portfolioLanguage',lang);
}

function closeMenu(){
  if(!menuButton||!nav)return;
  nav.classList.remove('nav-open');
  menuButton.setAttribute('aria-expanded','false');
}

if(languageButton){
  languageButton.addEventListener('click',()=>applyLanguage(language==='es'?'en':'es'));
}

if(menuButton&&nav){
  menuButton.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded',String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();
applyLanguage(language);
