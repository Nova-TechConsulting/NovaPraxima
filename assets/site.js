document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn) menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Auto-update copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll reveal via IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('reveal-in'));
  }
});
