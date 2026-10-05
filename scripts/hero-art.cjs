// Decorative SVGs share a palette and rhythm; all remain independent of content.
const path=(d,cls='art-line')=>`<path class="${cls}" d="${d}"/>`;
const node=(x,y,r=4,cls='art-node')=>`<circle class="${cls}" cx="${x}" cy="${y}" r="${r}"/>`;

module.exports=function heroArt(page){
 let drawing='';
 if(page==='research'){
  for(let i=0;i<8;i++)drawing+=path(`M 20 ${230+i*18} C 150 ${210-i*24},200 ${-40+i*20},320 ${64+i*20} S 500 ${270-i*17},650 ${55+i*18}`);
  drawing+=path('M 20 302 C 150 114,200 40,320 144 S 500 202,650 127','art-signal')+node(320,144)+node(470,195,3);
 }else if(page==='team'){
  const points=[[125,180],[240,78],[305,205],[418,105],[505,234],[603,132]];
  drawing+=path('M125 180 240 78 305 205 418 105 505 234 603 132 M125 180 305 205 505 234 M240 78 418 105 603 132');
  drawing+=path('M125 180 240 78 418 105 603 132','art-signal');
  for(const [x,y] of points)drawing+=node(x,y,20,'art-ring')+node(x,y,4);
 }else if(page==='publications'){
  for(let i=0;i<4;i++){
   const x=178+i*84,y=28+i*15;
   drawing+=`<g transform="translate(${x} ${y}) rotate(-12 70 110)"><rect class="art-sheet" width="138" height="208" rx="8"/>${[40,60,96,116,136,156].map((n,j)=>path(`M22 ${n}H${j%3===0?90:114}`)).join('')}</g>`;
  }
  drawing+=path('M146 276 C270 230 492 340 632 184','art-signal');
 }else if(page==='news'){
  drawing+=path('M66 239C226 239 235 77 389 77S520 194 650 100');
  drawing+=path('M66 239C226 239 235 77 389 77S520 194 650 100','art-signal');
  for(const [x,y] of [[142,223],[276,117],[389,77],[517,127]])drawing+=node(x,y,15,'art-ring')+node(x,y,4)+path(`M${x+19} ${y-26}h43M${x+19} ${y-14}h29`);
 }else{
  drawing+=`<g class="art-orbit">${[[-24,168,63],[26,198,76]].map(([r,rx,ry])=>`<ellipse class="art-line" cx="382" cy="160" rx="${rx}" ry="${ry}" transform="rotate(${r} 382 160)"/>`).join('')}${node(226,214,5)}${node(543,119,4)}${node(383,160,9,'art-ring')}</g>`;
  drawing+=path('M116 284 276 211 382 160 527 90 636 38','art-signal');
 }
 return `<svg class="page-hero-art" data-art="${page}" viewBox="0 0 660 320" fill="none" aria-hidden="true" focusable="false">${drawing}</svg>`;
};
