// Small enhancement: add a subtle reveal effect as sections enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});
document.querySelectorAll('.section, .menu-card, .hero-content, .hero-photo').forEach(el => {
  el.style.transition = 'opacity .65s ease, transform .65s ease';
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  observer.observe(el);
});
document.querySelectorAll('.show').forEach(el => {
  el.style.opacity = '1';
  el.style.transform = 'none';
});
const style = document.createElement('style');
style.textContent = '.show{opacity:1!important;transform:none!important}';
document.head.appendChild(style);
