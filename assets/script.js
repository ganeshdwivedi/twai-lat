document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

  if(!document.querySelector('.floating-whatsapp')){
    const wa=document.createElement('a');
    wa.className='floating-whatsapp';
    wa.href='https://wa.me/916232773397';
    wa.target='_blank';
    wa.rel='noopener';
    wa.setAttribute('aria-label','Chat with The Writing Agency India on WhatsApp');
    wa.innerHTML='<span class="wa-icon" aria-hidden="true">✆</span><span class="wa-label">WhatsApp</span>';
    document.body.appendChild(wa);
  }

  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const recipient=form.dataset.email;
      const subject=`Website enquiry: ${data.get('service')}`;
      const body=`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nRequirement:\n${data.get('message')}`;
      window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
});
