// script.js

// Toggle menu mobile
const nav = document.querySelector('nav');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '☰ Menu';
toggleBtn.classList.add('menu-toggle');
document.querySelector('header').prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// Confirmation formulaire contact
const form = document.querySelector('form');
if(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi réel
    alert('Merci pour votre message, nous vous répondrons bientôt !');
    form.reset();
  });
}
