(function () {
  const toggleBtn = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const links = menu.querySelectorAll('.nav__link');

  const open = () => {
    toggleBtn.classList.add('is-open');
    menu.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Fechar menu');
    // trava rolagem em mobile
    document.documentElement.style.overflow = 'hidden';
  };

  const close = () => {
    toggleBtn.classList.remove('is-open');
    menu.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Abrir menu');
    document.documentElement.style.overflow = '';
  };

  const toggle = () => {
    const isOpen = toggleBtn.classList.contains('is-open');
    isOpen ? close() : open();
  };

  // abre/fecha no clique
  toggleBtn.addEventListener('click', toggle);

  // fecha ao clicar nos links
  links.forEach((a) => a.addEventListener('click', close));

  // fecha com Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  // fecha ao redimensionar para desktop
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    if (w >= 768 && lastWidth < 768) close();
    lastWidth = w;
  });
})();
