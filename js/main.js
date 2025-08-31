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

// copiar telefone

(() => {
  const btnPhone = document.querySelector('.contact__copy');
  const toast = document.querySelector('.copy__toast');
  if (!btnPhone || !toast) return;

  btnPhone.addEventListener('click', async () => {
    const value = btnPhone.dataset.copy || '';
    try {
      await navigator.clipboard.writeText(value);
      toast.textContent = 'Copiado! ✅';
    } catch {
      toast.textContent = 'Não foi possível copiar :(';
    }
    // só aparece quando clicado
    toast.hidden = false;
    setTimeout(() => (toast.hidden = true), 1600);
  });

  
})

();
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const success = document.getElementById('formSuccess');

  const errors = {
    name: document.getElementById('nameError'),
    email: document.getElementById('emailError'),
    message: document.getElementById('messageError'),
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(el, errorEl, msg) {
    el.setAttribute('aria-invalid', 'true');
    errorEl.textContent = msg;
    errorEl.hidden = false;
  }
  function clearError(el, errorEl) {
    el.removeAttribute('aria-invalid');
    errorEl.textContent = '';
    errorEl.hidden = true;
  }

  function validateName() {
    const v = (fullName.value || '').trim().replace(/\s+/g, ' ');
    if (!v) { showError(fullName, errors.name, 'Informe seu nome completo.'); return false; }
    if (v.split(' ').length < 2 || v.length < 5) {
      showError(fullName, errors.name, 'Digite nome e sobrenome (mín. 5 caracteres).');
      return false;
    }
    clearError(fullName, errors.name);
    return true;
  }

  function validateEmail() {
    const v = (email.value || '').trim().toLowerCase();
    if (!v) { showError(email, errors.email, 'Informe seu e-mail.'); return false; }
    if (!emailRe.test(v)) { showError(email, errors.email, 'Informe um e-mail válido.'); return false; }
    clearError(email, errors.email);
    return true;
  }

  function validateMessage() {
    const v = (message.value || '').trim();
    if (!v) { showError(message, errors.message, 'Escreva sua mensagem.'); return false; }
    if (v.length < 10) { showError(message, errors.message, 'Mensagem muito curta (mín. 10 caracteres).'); return false; }
    clearError(message, errors.message);
    return true;
  }

  // Validação em tempo real
  fullName.addEventListener('input', validateName);
  email.addEventListener('input', validateEmail);
  message.addEventListener('input', validateMessage);

  // Envio do formulário
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    success.hidden = true;

    const ok =
      validateName() &
      validateEmail() &
      validateMessage(); // bitwise aqui é seguro pq retorna 0/1

    if (!ok) {
      // foca no primeiro inválido
      if (fullName.getAttribute('aria-invalid') === 'true') return fullName.focus();
      if (email.getAttribute('aria-invalid') === 'true') return email.focus();
      if (message.getAttribute('aria-invalid') === 'true') return message.focus();
      return;
    }

    // aqui você integra com seu backend (fetch/POST). Enquanto isso, simulamos sucesso:
    try {
     
      success.textContent = 'Mensagem enviada com sucesso! 🎉';
      success.hidden = false;
    } catch (err) {
      success.textContent = 'Não foi possível enviar agora. Tente novamente mais tarde.';
      success.hidden = false;
    }
  });

  // fechar alert de sucesso ao editar novamente
  form.addEventListener('input', () => { success.hidden = true; }, { once: false });
})();



