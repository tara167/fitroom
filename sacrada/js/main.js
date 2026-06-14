/* =========================================================
   SACRADA · main.js
   ========================================================= */
const CONFIG = {
  bookingUrl: "https://calendly.com/vitalbreathcoach/sacrada-session",
  email: "",
  instagramUrl: "https://www.instagram.com/sacrada.space",
  tiktokUrl: "https://www.tiktok.com/@sacrada.space",
  sessionLength: "60–75 minutes",
  onlinePlatform: "a private video call",
  inPersonLocation: "",
  cancellation: "you can reschedule with at least 24 hours' notice",
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
}, { threshold: 0.05 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Fallback: show all reveals after 1s in case observer doesn't fire
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}, 1000);

/* ── Book buttons ── */
if (!CONFIG.bookingUrl) {
  console.warn('[Sacrada] CONFIG.bookingUrl is empty. Book buttons are disabled until a Calendly URL is set.');
}

document.querySelectorAll('.js-book').forEach(el => {
  if (CONFIG.bookingUrl) {
    el.setAttribute('href', CONFIG.bookingUrl);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  } else {
    // bookingUrl not set — disable buttons visually
    el.setAttribute('href', '#');
    el.setAttribute('aria-disabled', 'true');
    el.classList.add('btn--disabled');
    el.addEventListener('click', e => e.preventDefault());
  }
});

/* ── FAQ accordion ── */
document.querySelectorAll('.faq__item').forEach(item => {
  const btn = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');
  if (!btn || !answer) return;

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    // Close all others
    document.querySelectorAll('.faq__item').forEach(other => {
      other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      other.querySelector('.faq__answer').hidden = true;
    });
    // Toggle this one
    btn.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
  });
});
