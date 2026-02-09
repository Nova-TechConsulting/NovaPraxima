
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn) menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
