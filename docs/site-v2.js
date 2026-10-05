(()=>{'use strict';
const root=document.documentElement,langButton=document.querySelector('#language-toggle'),menuButton=document.querySelector('#menu-toggle'),nav=document.querySelector('#site-nav');
let year='';
const search=document.querySelector('#publication-search'),topic=document.querySelector('#publication-topic');
function filter(updateUrl=false){
 const count=document.querySelector('#publication-count');if(!count)return;
 const query=(search.value||'').trim().toLowerCase();let n=0;
 document.querySelectorAll('.publication').forEach(p=>{p.hidden=!((!year||p.dataset.year===year)&&(!topic.value||p.dataset.topic===topic.value)&&p.dataset.search.includes(query));if(!p.hidden)n++;});
 document.querySelectorAll('.publication-year-group').forEach(g=>{g.hidden=!g.querySelector('.publication:not([hidden])');});
 count.textContent=root.dataset.locale==='en'?`${n} research record${n===1?'':'s'}`:`找到 ${n} 篇成果`;document.querySelector('#no-publications').hidden=n!==0;
 document.querySelectorAll('[data-filter-year]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filterYear===year)));
 if(updateUrl){const u=new URL(location.href);u.searchParams.delete('author');['q','year','topic'].forEach(k=>u.searchParams.delete(k));if(search.value)u.searchParams.set('q',search.value);if(year)u.searchParams.set('year',year);if(topic.value)u.searchParams.set('topic',topic.value);history.replaceState(null,'',u);}
}
function locale(value,save=false){root.dataset.locale=value;root.lang=value==='zh'?'zh-CN':'en';langButton.textContent=value==='zh'?'EN':'中文';langButton.setAttribute('aria-label',value==='zh'?'Switch to English':'切换为中文');document.querySelectorAll('[data-option-zh]').forEach(o=>o.textContent=value==='zh'?o.dataset.optionZh:o.dataset.optionEn);document.title=(value==='zh'?document.body.dataset.titleZh+' · AIDE Lab':document.body.dataset.titleEn+' · AIDE Lab');if(save){try{localStorage.setItem('aide-locale-preference',value);}catch{}}filter();}
locale(root.dataset.locale==='zh'?'zh':'en');langButton.addEventListener('click',()=>locale(root.dataset.locale==='zh'?'en':'zh',true));
function closeMenu(focus=false){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');if(focus)menuButton.focus();}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open'))closeMenu(true);});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
if(search){const params=new URLSearchParams(location.search);search.value=params.get('author')||params.get('q')||'';year=params.get('year')||'';topic.value=params.get('topic')||'';filter();search.addEventListener('input',()=>filter(true));topic.addEventListener('change',()=>filter(true));document.querySelectorAll('[data-filter-year]').forEach(b=>b.addEventListener('click',()=>{year=b.dataset.filterYear;filter(true);}));document.querySelector('#clear-filters').addEventListener('click',()=>{search.value='';topic.value='';year='';filter(true);});}
document.querySelectorAll('.copy-citation').forEach(b=>b.addEventListener('click',async()=>{const status=b.nextElementSibling;try{await navigator.clipboard.writeText(b.parentElement.querySelector('pre').textContent);status.textContent=root.dataset.locale==='zh'?'已复制':'Copied';}catch{status.textContent=root.dataset.locale==='zh'?'请选择上方文本复制':'Select and copy the text above';}}));
// Native modal semantics provide keyboard focus containment and Escape handling.
const viewer=document.querySelector('#figure-viewer');
if(viewer&&typeof viewer.showModal==='function'){
 const image=viewer.querySelector('#figure-viewer-image'),viewport=viewer.querySelector('.figure-viewport'),zoom=viewer.querySelector('#figure-zoom');let opener;
 function zoomUI(actual){viewer.classList.toggle('actual-size',actual);zoom.setAttribute('aria-pressed',String(actual));zoom.innerHTML=actual?'<span data-lang="zh">适应屏幕</span><span data-lang="en">Fit to screen</span>':'<span data-lang="zh">原始尺寸</span><span data-lang="en">Actual size</span>';viewport.scrollTo(0,0);}
 document.querySelectorAll('[data-figure]').forEach(a=>a.addEventListener('click',e=>{
  if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
  e.preventDefault();opener=a;const source=a.querySelector('img');image.src=a.href;image.alt=source.alt;
  const caption=a.closest('figure').querySelector('figcaption');viewer.querySelector('#figure-viewer-caption').textContent=caption?.innerText||source.alt;
  zoomUI(false);viewer.showModal();document.body.classList.add('viewing-figure');
 }));
 zoom.addEventListener('click',()=>zoomUI(!viewer.classList.contains('actual-size')));
 viewer.querySelector('#figure-close').addEventListener('click',()=>viewer.close());
 viewer.addEventListener('click',e=>{const r=viewer.getBoundingClientRect();if(e.target===viewer&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))viewer.close();});
 viewer.addEventListener('close',()=>{document.body.classList.remove('viewing-figure');opener?.focus({preventScroll:true});image.removeAttribute('src');});
}
// Ambient wireframe follows the dark blue technology background of the reference.
const canvas=document.querySelector('#network-canvas');if(!canvas)return;const ctx=canvas.getContext('2d');if(!ctx)return;
const motionButton=document.querySelector('#motion-toggle'),reduce=matchMedia('(prefers-reduced-motion: reduce)');let paused=reduce.matches,visible=true,frame=0,angle=0,width=0,height=0,last=0;
function size(){const rect=canvas.getBoundingClientRect(),ratio=Math.min(devicePixelRatio||1,2);width=rect.width;height=rect.height;canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);draw();}
function draw(){ctx.clearRect(0,0,width,height);const mobile=width<640,cx=width*(mobile?.83:.78),cy=height*.44,r=Math.min(height*.49,width*.27),points=[];
 const glow=ctx.createRadialGradient(cx,cy,0,cx,cy,r*1.75);glow.addColorStop(0,'rgba(0,156,229,.11)');glow.addColorStop(1,'rgba(0,70,140,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
 for(let y=1;y<17;y++){const lat=Math.PI*y/18;for(let x=0;x<36;x++){const lng=x*Math.PI/18+angle;const xx=Math.sin(lat)*Math.cos(lng),yy=Math.cos(lat),z=Math.sin(lat)*Math.sin(lng);points.push({x:cx+r*(xx*.96+yy*.16),y:cy+r*(yy*.88-xx*.18),z,row:y,col:x});}}
 ctx.lineWidth=.7;for(let i=0;i<points.length;i++){const p=points[i];if(p.z<-.08)continue;const a=.09+(p.z+1)*.14;ctx.strokeStyle=`rgba(0,181,239,${a})`;for(const j of [i+1,i+36]){const q=points[j];if(q&&q.z>=-.08&&Math.abs(q.col-p.col)<2){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();}}if(i%9===0){ctx.fillStyle=i%27===0?'rgba(238,92,150,.9)':'rgba(88,223,255,.8)';ctx.beginPath();ctx.arc(p.x,p.y,i%27===0?2.7:1.5,0,Math.PI*2);ctx.fill();}}
 for(let k=0;k<9;k++){const y=height*(.14+k*.08),start=width*(.47+(k%3)*.025),end=width*.98;ctx.strokeStyle=k%3===0?'rgba(239,74,139,.16)':'rgba(24,151,233,.13)';ctx.beginPath();ctx.moveTo(start,y);ctx.lineTo(end,y-45);ctx.stroke();const px=start+(end-start)*((angle*.25+k*.19)%1);ctx.fillStyle=k%3===0?'rgba(251,108,163,.65)':'rgba(58,208,247,.7)';ctx.fillRect(px,y-(px-start)/(end-start)*45,3,3);}
}
function tick(now){frame=0;if(paused||!visible||document.hidden)return;if(now-last>32){angle+=.0025;draw();last=now;}frame=requestAnimationFrame(tick);}
function schedule(){if(frame)cancelAnimationFrame(frame);frame=0;if(!paused&&visible&&!document.hidden)frame=requestAnimationFrame(tick);}
function motionUI(){motionButton.setAttribute('aria-pressed',String(paused));motionButton.innerHTML=paused?'<span data-lang="zh">播放动态</span><span data-lang="en">Play motion</span>':'<span data-lang="zh">暂停动态</span><span data-lang="en">Pause motion</span>';}
motionButton.addEventListener('click',()=>{paused=!paused;motionUI();schedule();});reduce.addEventListener('change',e=>{paused=e.matches;motionUI();schedule();});document.addEventListener('visibilitychange',schedule);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();}).observe(canvas);new ResizeObserver(size).observe(canvas);motionUI();size();schedule();
})();
