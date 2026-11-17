(function(){
  var t=document.querySelector('.nav-toggle'),n=document.querySelector('.site-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false')});
    n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded','false')}})}

  var box=document.createElement('div');box.className='lightbox';box.setAttribute('role','dialog');
  box.setAttribute('aria-modal','true');box.innerHTML='<button class="lb-close" aria-label="Close">×</button><img alt=""><span class="lb-caption"></span>';
  document.body.appendChild(box);
  var img=box.querySelector('img'),cap=box.querySelector('.lb-caption'),current=[];
  function show(btn){
    current=Array.prototype.slice.call(document.querySelectorAll('.shot-btn'));
    img.src=btn.dataset.full;img.alt=btn.getAttribute('data-caption')||'';
    cap.textContent=btn.getAttribute('data-caption')||'';box.classList.add('open');document.body.style.overflow='hidden';
  }
  function hide(){box.classList.remove('open');document.body.style.overflow='';}
  document.querySelectorAll('.shot-btn').forEach(function(b){b.addEventListener('click',function(){show(b)})});
  box.addEventListener('click',function(e){if(e.target!==img)hide()});
  document.addEventListener('keydown',function(e){
    if(!box.classList.contains('open'))return;
    if(e.key==='Escape')hide();
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
      var i=current.indexOf(document.querySelector('.shot-btn[data-full="'+img.src.split('/').pop()+'"]'));
      var next=e.key==='ArrowRight'?(i+1)%current.length:(i-1+current.length)%current.length;
      if(current[next])show(current[next]);
    }
  });
})();
