 document.getElementById("navbar__cta").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Consulta agendada com sucesso!");
});

// Menu hamburguer
const hamburguer = document.getElementById('hamburguer');
const menu = document.querySelector('.navbar__links');

hamburguer.addEventListener('click', function() {
  menu.classList.toggle('navbar__links--aberto');
  hamburguer.classList.toggle('navbar__hamburguer--ativo');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.navbar__links a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('navbar__links--aberto');
    hamburguer.classList.remove('navbar__hamburguer--ativo');
  });
});

// Efeito de scroll na navbar
window.addEventListener("scroll", function() {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("navbar--scrolled", window.scrollY > 50);
});