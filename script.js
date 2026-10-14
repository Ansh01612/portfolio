// Lightweight antigravity-inspired effects; no framework or animation library required.
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [], width = 0, height = 0, dpr = 1;
function resizeStars(){
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth; height = window.innerHeight;
  canvas.width = width*dpr; canvas.height = height*dpr;
  canvas.style.width = width+'px'; canvas.style.height = height+'px';
  ctx.setTransform(dpr,0,0,dpr,0,0);
  const count = Math.min(140, Math.floor(width*height/8500));
  stars = Array.from({length:count},()=>({x:Math.random()*width,y:Math.random()*height,r:Math.random()*1.4+.25,s:Math.random()*.35+.08,a:Math.random()*.7+.15,h:Math.random()<.72?150:Math.random()<.5?60:350}));
}
function drawStars(){
  ctx.clearRect(0,0,width,height);
  for(const p of stars){
    p.y-=p.s;
    if(p.y < -3){p.y=height+3;p.x=Math.random()*width;}
    p.a += (Math.random()-.5)*.025;p.a=Math.max(.12,Math.min(.85,p.a));
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=`hsla(${p.h},95%,70%,${p.a})`;ctx.fill();
  }
  requestAnimationFrame(drawStars);
}
resizeStars(); drawStars(); window.addEventListener('resize',resizeStars);

// Scroll reveal
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Current section indicator
const navLinks = [...document.querySelectorAll('.nav a')];
const sectionObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));}});
},{rootMargin:'-30% 0px -60% 0px'});
document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));

// Mobile navigation
const menuToggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));

// Small terminal commands: type about, skills, projects, experience, certificates, resume or contact.
const commandInput=document.getElementById('terminal-input'), feedback=document.getElementById('terminal-feedback');
const commands={about:'#about',whoami:'#about',skills:'#skills',projects:'#projects',experience:'#experience',certificates:'#certificates',resume:'#resume',contact:'#contact'};
commandInput.addEventListener('keydown',e=>{
  if(e.key!=='Enter') return;
  const value=commandInput.value.trim().toLowerCase().replace(/[^a-z]/g,'');
  if(commands[value]){feedback.textContent='Opening '+value+'…';document.querySelector(commands[value]).scrollIntoView({behavior:'smooth'});commandInput.value='';}
  else{feedback.textContent='Try: about, skills, projects, experience, certificates, resume, contact';}
});

// Gentle pointer glow, disabled on touch devices and reduced-motion preference.
const glow=document.querySelector('.cursor-glow');
if(matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity='.8';},{passive:true});
  document.addEventListener('pointerleave',()=>glow.style.opacity='0');
}
document.getElementById('year').textContent=new Date().getFullYear();
