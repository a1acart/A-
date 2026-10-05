const motion=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!motion.matches){document.documentElement.classList.add('js');const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}},{threshold:0.08});document.querySelectorAll('.reveal').forEach(section=>observer.observe(section));}
const wave=document.querySelector('.sound-wave');
for(let index=0;index<85;index++){const bar=document.createElement('i');bar.style.setProperty('--bar',`${14+Math.sin(index/84*Math.PI)*(28+115*Math.abs(Math.sin(index*1.74)))}px`);bar.style.setProperty('--delay',`${index*-.07}s`);wave.append(bar);}
document.querySelector('#year').textContent=new Date().getFullYear();
const dialog=document.querySelector('#concept-dialog');
document.querySelector('#open-details').addEventListener('click',()=>dialog.showModal());
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
