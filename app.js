(function () {
 const imageExts=['png','jpg','jpeg','webp'];
 const mediaExts=['png','jpg','jpeg','webp','mp4','webm'];
 const imageExists=src=>new Promise(resolve=>{const i=new Image();i.onload=()=>resolve(true);i.onerror=()=>resolve(false);i.src=src;});
 const fileExists=src=>new Promise(resolve=>{const r=new XMLHttpRequest();r.open('HEAD',src,true);r.onload=()=>resolve(r.status>=200&&r.status<400);r.onerror=()=>resolve(false);r.send();});
 async function discover(prefix,bare){
  const list=[];
  if(bare){for(const ext of imageExts){const src=`images/${prefix}.${ext}`;if(await imageExists(src)){list.push({src,type:'image'});break;}}}
  for(let n=1;n<=60;n++){let found=null;for(const ext of mediaExts){const src=`images/${prefix}${n}.${ext}`;const ok=['mp4','webm'].includes(ext)?await fileExists(src):await imageExists(src);if(ok){found={src,type:['mp4','webm'].includes(ext)?'video':'image'};break;}}if(!found)break;list.push(found);}
  return list;
 }
 async function initGallery(el){
  const prefix=el.dataset.prefix,title=el.dataset.title||prefix,items=await discover(prefix,el.dataset.allowBare==='true');
  if(!el.isConnected)return;el.replaceChildren();
  if(!items.length){const empty=document.createElement('div');empty.className='gallery-empty';empty.innerHTML='<div class="empty-icon" aria-hidden="true">▧</div><strong></strong><span>Project imagery</span>';empty.querySelector('strong').textContent=title;el.appendChild(empty);return;}
  let index=0,media;
  const render=()=>{if(media)media.remove();const item=items[index];media=document.createElement(item.type==='video'?'video':'img');media.className=item.type==='video'?'gallery-video':'gallery-image';if(item.type==='video'){media.controls=true;media.playsInline=true;media.preload='metadata';media.src=item.src;}else{media.loading='lazy';media.src=item.src;media.alt=`${title} image ${index+1}`;}el.prepend(media);const count=el.querySelector('.gallery-count');if(count)count.textContent=`${index+1} / ${items.length}`;el.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===index));};
  if(items.length>1){const prev=document.createElement('button');prev.className='gallery-arrow left';prev.type='button';prev.setAttribute('aria-label','Previous item');prev.textContent='‹';const next=document.createElement('button');next.className='gallery-arrow right';next.type='button';next.setAttribute('aria-label','Next item');next.textContent='›';const count=document.createElement('span');count.className='gallery-count';const dots=document.createElement('div');dots.className='gallery-dots';items.forEach((_,i)=>{const d=document.createElement('button');d.type='button';d.className='dot'+(i===0?' active':'');d.setAttribute('aria-label',`Show gallery item ${i+1}`);d.addEventListener('click',()=>{index=i;render();});dots.appendChild(d);});prev.addEventListener('click',()=>{index=(index-1+items.length)%items.length;render();});next.addEventListener('click',()=>{index=(index+1)%items.length;render();});el.append(prev,next,count,dots);}
  render();
 }
 document.querySelectorAll('[data-gallery]').forEach(initGallery);
 document.querySelectorAll('[data-note-toggle]').forEach(b=>b.addEventListener('click',()=>{const note=b.nextElementSibling,open=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!open));note.hidden=open;b.textContent=open?'ⓘ Simulation note':'× Hide simulation note';}));
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{const selected=b.dataset.filter.toLowerCase();document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.project-card').forEach(card=>{const cat=(card.dataset.category||'').toLowerCase();card.hidden=selected!=='all'&&!cat.includes(selected);});}));
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
})();
