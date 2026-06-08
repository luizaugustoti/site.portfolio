/* ============================================
   PORTFÓLIO — main.js
   Interatividade: scroll reveal + formulário
   ============================================ */

// ── SCROLL REVEAL ──
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 4) * 0.1 + 's';
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
});

// ── FORMULÁRIO ──
function handleSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;

  btn.textContent = '✓ Mensagem enviada!';
  btn.style.background = '#1a1a25';
  btn.style.color = 'var(--accent)';
  btn.style.border = '1px solid var(--accent)';

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.style.color = '';
    btn.style.border = '';
    e.target.reset();
  }, 3000);
}
