document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const identifier = document.getElementById('identifier');
  const password = document.getElementById('password');
  const toggleBtn = document.getElementById('togglePassword');
  const identifierError = document.getElementById('identifierError');
  const passwordError = document.getElementById('passwordError');

  toggleBtn.addEventListener('click', () => {
    if (password.type === 'password') {
      password.type = 'text';
      toggleBtn.textContent = 'Cacher';
    } else {
      password.type = 'password';
      toggleBtn.textContent = 'Afficher';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    identifierError.textContent = '';
    passwordError.textContent = '';

    const idVal = identifier.value.trim();
    const pwVal = password.value;

    if (!idVal) {
      identifierError.textContent = 'Veuillez entrer votre adresse courriel ou pseudonyme.';
      valid = false;
    }

    if (!pwVal || pwVal.length < 6) {
      passwordError.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
      valid = false;
    }

    if (!valid) return;

    // Simulate authentication success.
    const remember = document.getElementById('remember').checked;
    if (remember) {
      try { localStorage.setItem('rememberedUser', idVal); } catch (err) { /* ignore */ }
    }

    // In a real app, send credentials to the server here.
    alert('Connexion réussie (simulation). Redirection...');
    window.location.href = 'index.html';
  });

  // Accessibility: clear error when user types
  [identifier, password].forEach((el) => {
    el.addEventListener('input', () => {
      if (el === identifier) identifierError.textContent = '';
      if (el === password) passwordError.textContent = '';
    });
  });
});
