
document.documentElement.classList.add('js');
const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const T=(c='',d=0)=>`<svg class="tulip ${c}" style="--d:${d}s" viewBox="0 0 120 320" aria-hidden="true"><path class="stem" pathLength="1" d="M60 150C57 192 64 232 60 268 58 288 61 304 60 318"/><g class="leaf"><path fill="url(#gl)" d="M60 312C30 296 8 248 18 168 20 160 25 160 27 166 46 202 60 256 60 312Z"/><path class="vn" d="M59 308C46 262 34 214 23 172"/></g><g class="leaf"><path fill="url(#gl)" d="M60 292C94 278 112 238 104 198 102 191 98 191 95 197 78 224 62 256 60 292Z"/><path class="vn" d="M61 288C72 254 86 226 99 200"/></g><g class="bloom"><path fill="#B9777B" fill-opacity=".45" d="M60 160C48 132 50 92 60 50 70 92 72 132 60 160Z"/><path class="pl" fill="url(#gs)" d="M58 158C32 154 19 120 25 74 27 56 33 45 40 36 50 58 58 98 58 158Z"/><path class="pr" fill="url(#gs)" d="M62 158C88 154 101 120 95 74 93 56 87 45 80 36 70 58 62 98 62 158Z"/><path fill="url(#gc)" d="M60 160C41 144 37 102 46 64 50 48 56 36 60 22 64 36 70 48 74 64 83 102 79 144 60 160Z"/><path class="vn" d="M60 152C57 112 57 72 60 32M52 146C46 118 45 92 49 66M68 146C74 118 75 92 71 66"/></g></svg>`;
const CL=d=>T('a',d)+T('b',d+.8)+T('c',d+.4);
const ENC={"s": "xgQDuk6zL3nq3zvsX5OUnQ==", "i": "5R7E/rfGR3tgWui9", "c": "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", "n": 250000};
let L=[];
const PAGES=[[0,1,2],[3,4,5,6],[7,8,9,10]];
function petals(el,n){for(let i=0;i<n;i++){const s=document.createElement('i');s.className='pt';s.style.cssText=`left:${8+Math.random()*84}%;--s:${.7+Math.random()*.7};--dur:${22+Math.random()*14}s;--del:${-Math.random()*30}s;--x:${Math.random()*70-35}px`;el.appendChild(s)}}
function build(){const s=$('#sheet');s.insertAdjacentHTML('beforeend',`<div class="op rv">${T('mini on')}</div>`);
PAGES.forEach((g,n)=>{const pg=document.createElement('section');pg.className='pg';pg.setAttribute('aria-label','page '+(n+1));
g.forEach(i=>{const p=document.createElement('p');p.className='rv';p.textContent=L[i];pg.appendChild(p)});
pg.insertAdjacentHTML('beforeend',`<div class="fo rv" aria-hidden="true">${n+1}</div>`);s.appendChild(pg)})}
let io,go;
function observe(){const rv=[...document.querySelectorAll('.rv:not(.in)')],gw=[...document.querySelectorAll('.gw:not(.on)')];
if(RM||!('IntersectionObserver'in window)){rv.forEach(e=>e.classList.add('in'));gw.forEach(e=>{e.classList.add('on');e.parentElement.classList.add('go')});return}
io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2,rootMargin:'0px 0px -4% 0px'});rv.forEach(e=>io.observe(e));
go=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');e.target.parentElement.classList.add('go');go.unobserve(e.target)}}),{threshold:.6});gw.forEach(e=>go.observe(e))}
const gate=$('#gate'),pw=$('#pw'),err=$('#err');let opening=false;
$('#gt').innerHTML=CL(.1);$('#cl').innerHTML=CL(.3);$('#fin').innerHTML=T('big gw',.3)+'<i class="lp" aria-hidden="true"></i>';
petals($('#gp'),3);petals($('#hp'),4);
requestAnimationFrame(()=>setTimeout(()=>document.querySelectorAll('#gt .tulip').forEach(t=>t.classList.add('on')),200));
const goB=$('#go'),B64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function dec(v){if(!(window.crypto&&crypto.subtle))throw new Error('nosubtle');
const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(v),'PBKDF2',false,['deriveKey']);
const k=await crypto.subtle.deriveKey({name:'PBKDF2',salt:B64(ENC.s),iterations:ENC.n,hash:'SHA-256'},km,{name:'AES-GCM',length:256},false,['decrypt']);
return JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:B64(ENC.i)},k,B64(ENC.c))))}
async function tryOpen(){if(opening)return;opening=true;const lb=goB.textContent;goB.textContent='opening…';let D=null,ns=false;
try{D=await dec(pw.value.trim())}catch(e){ns=!!(e&&e.message==='nosubtle')}
goB.textContent=lb;if(D)return unlock(D);opening=false;
err.textContent=ns?"this page has to be opened over https (for example from GitHub Pages).":"that isn't the one. check the numbers and try again.";err.classList.add('show');
pw.classList.remove('shake');void pw.offsetWidth;pw.classList.add('shake');pw.select()}
function unlock(D){opening=true;const m=$('main');err.classList.remove('show');L=D.p;build();
const sg=$('.sig');D.s.forEach((t,i)=>{if(i)sg.append(' ');const sp=document.createElement('span');sp.textContent=t;sg.append(sp)});m.hidden=false;scrollTo(0,0);
gate.classList.add('out');document.body.classList.remove('locked');if(SONG)$('#mu').hidden=false;
setTimeout(()=>{m.classList.add('open');document.querySelectorAll('#hero .tulip').forEach(t=>t.classList.add('on'));observe()},RM?0:300);
setTimeout(()=>gate.remove(),RM?0:1800)}
$('#go').addEventListener('click',tryOpen);
pw.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();tryOpen()}});
pw.addEventListener('input',()=>err.classList.remove('show'));
const pg=$('#pg');let tk=0;
function prog(){tk=0;const h=document.documentElement.scrollHeight-innerHeight;pg.style.transform=`scaleX(${h>0?Math.min(1,Math.max(0,scrollY/h)):0})`}
const req=()=>{if(!tk)tk=requestAnimationFrame(prog)};addEventListener('scroll',req,{passive:true});addEventListener('resize',req);
/* music: plays the local audio file only; starts only when the visitor presses the button */
const SONG='assets/audio/if-ever-youre-in-my-arms-again.mp3';
const mb=$('#music'),au=$('#song'),mu=$('#mu'),VMAX=.7,FADE=(au.volume=.5,au.volume===.5);
const lab=s=>{mb.textContent={on:'♪ music on',off:'♪ music off',load:'♪ loading…',err:'♪ music unavailable'}[s];mb.setAttribute('aria-pressed',String(s==='on'))};
let fd,ct,busy=false;
const fade=(to,ms,done)=>{clearInterval(fd);if(!FADE){au.volume=1;return done&&done()}const s=au.volume,t0=performance.now();fd=setInterval(()=>{const k=Math.min(1,(performance.now()-t0)/ms);au.volume=s+(to-s)*k;if(k===1){clearInterval(fd);done&&done()}},50)};
function setSrc(){if(au.getAttribute('src'))return true;
if(SONG[0]!=='#'){au.src=SONG;return true}
const el=$(SONG);if(!el||!el.dataset.done)return false;
const bin=atob(el.textContent.trim()),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
au.src=URL.createObjectURL(new Blob([u],{type:'audio/mpeg'}));return true}
au.addEventListener('playing',()=>{lab('on');mu.classList.add('on');clearTimeout(ct);ct=setTimeout(()=>mu.classList.remove('on'),6000)});
au.addEventListener('pause',()=>{lab('off');mu.classList.remove('on')});
au.addEventListener('waiting',()=>lab('load'));
au.addEventListener('error',()=>{const el=SONG[0]==='#'&&$(SONG);
if(el&&au.src.startsWith('blob:')&&!au.dataset.r){au.dataset.r=1;au.src='data:audio/mpeg;base64,'+el.textContent.trim();au.play().then(()=>fade(VMAX,2200)).catch(()=>lab('err'));return}
busy=false;lab('err');mb.disabled=true});
mb.addEventListener('click',async()=>{if(busy)return;
if(!au.paused){busy=true;fade(0,900,()=>{au.pause();au.volume=VMAX;busy=false});return}
lab('load');
if(!setSrc()){await new Promise(r=>addEventListener('load',r,{once:true}));if(!setSrc()){lab('err');return}}
try{au.volume=FADE?0:1;await au.play();fade(VMAX,2200)}catch(e){lab(e&&e.name==='NotAllowedError'?'off':'err')}});
if('mediaSession'in navigator){try{navigator.mediaSession.metadata=new MediaMetadata({title:"If Ever You're in My Arms Again",album:'Somewhere, Somehow'});['play','pause'].forEach(a=>navigator.mediaSession.setActionHandler(a,()=>mb.click()))}catch(e){}}
