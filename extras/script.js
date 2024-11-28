const menuHambButton = document.querySelector(".menu-hamb-button");
const navBarLinks = document.querySelector(".navbar-links");
const menuOverlay = document.createElement("div"); // Criar um overlay dinâmico
menuOverlay.classList.add("menu-overlay"); // Adicionar a classe
document.body.appendChild(menuOverlay); // Adicionar o overlay ao body

// Função para fechar o menu
function closeMenu() {
  menuHambButton.classList.remove("isOpen");
  navBarLinks.classList.remove("show");
  menuOverlay.classList.remove("show");
}

// Evento para abrir e fechar o menu
menuHambButton.addEventListener("click", () => {
  const isOpen = menuHambButton.classList.toggle("isOpen");
  navBarLinks.classList.toggle("show", isOpen);
  menuOverlay.classList.toggle("show", isOpen);
});

// Evento para fechar o menu ao clicar no overlay
menuOverlay.addEventListener("click", closeMenu);

// Adiciona evento de clique em cada link do menu para fechá-lo
const menuLinks = document.querySelectorAll(".navbar-links a");
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

