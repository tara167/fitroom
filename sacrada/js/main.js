/* =========================================================
   SACRADA · main.js
   ========================================================= */
const CONFIG = {
  calendlyUrl: "https://calendly.com/vitalbreathcoach",
};

/* ── Scroll progress ── */
const scrollBar = document.getElementById('scrollBar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  if (scrollBar) scrollBar.style.width = pct + '%';

  const header = document.getElementById('header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Reveal on scroll ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Calendly links ── */
document.querySelectorAll('.js-book').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    window.open(CONFIG.calendlyUrl, '_blank');
  });
});
