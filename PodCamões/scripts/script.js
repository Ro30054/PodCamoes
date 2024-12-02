// Função para abrir o menu
function toggleMenu() {
  const menuOverlay = document.querySelector('.menu-overlay');
  menuOverlay.classList.add('active');
}

// Função para fechar o menu
function closeMenu() {
  const menuOverlay = document.querySelector('.menu-overlay');
  menuOverlay.classList.remove('active');
}
