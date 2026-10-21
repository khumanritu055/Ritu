// Photo upload: click the photo box on the Home page. The bundled image is photo/photo.png.
(function(){
var btn=document.getElementById('photoBtn'),inp=document.getElementById('photoIn'),img=document.getElementById('photoImg');
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var revealItems=document.querySelectorAll('.hero-copy,.hero-visual,.trust-row,.section-head,.service-card,.page-heading,.about-layout,.chips li,.proj,.contact-layout');
revealItems.forEach(function(el,i){el.classList.add('reveal');if(el.matches('.service-card,.chips li'))el.classList.add('reveal-delay-'+((i%3)+1))});
if('IntersectionObserver' in window){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});revealItems.forEach(function(el){observer.observe(el)})}else{revealItems.forEach(function(el){el.classList.add('is-visible')})}
if(!btn)return;
function show(src){img.src=src;btn.classList.add('has')}
var tries=['photo/photo.png','photo.png','photo.jpg','photo.jpeg'],ti=0;
img.onerror=function(){var cur=img.getAttribute('src')||'';if(cur.indexOf('data:')===0){try{localStorage.removeItem('ritu-photo')}catch(e){}ti=0;show(tries[0]);return}ti++;if(ti<tries.length){show(tries[ti])}else{btn.classList.remove('has')}};
var saved=null;try{saved=localStorage.getItem('ritu-photo')}catch(e){}
show(saved||tries[0]);
btn.addEventListener('click',function(){inp.click()});
inp.addEventListener('change',function(){
var f=inp.files&&inp.files[0];if(!f)return;
var r=new FileReader();
r.onload=function(){var im=new Image();
im.onload=function(){var k=Math.min(1,800/Math.max(im.width,im.height)),c=document.createElement('canvas');
c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);
var d=c.toDataURL('image/jpeg',.85);show(d);try{localStorage.setItem('ritu-photo',d)}catch(e){}};
im.src=r.result};
r.readAsDataURL(f);
});
})();

// Contact form: opens Gmail with the visitor's message addressed to Ritu.
(function(){
var f=document.getElementById('contactForm');if(!f)return;
var m=document.getElementById('formMsg');
f.addEventListener('submit',function(e){
e.preventDefault();
var data=new FormData(f),subject='Portfolio enquiry from '+data.get('name');
var body='Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\nMessage:\n'+data.get('message');
var gmail='https://mail.google.com/mail/?view=cm&fs=1&to=khumanritu055%40gmail.com&su='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
window.open(gmail,'_blank','noopener');
m.textContent='Gmail opened in a new tab with your message ready. Please sign in if asked, then press Send.';
});
})();
