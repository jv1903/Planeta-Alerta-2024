const menuHambButton = document.querySelector(".menu-hamb-button");
const navBarLinks = document.querySelector(".navbar-links");
const menuOverlay = document.createElement("div");
menuOverlay.classList.add("menu-overlay"); 
document.body.appendChild(menuOverlay); 


function closeMenu() {
  menuHambButton.classList.remove("isOpen");
  navBarLinks.classList.remove("show");
  menuOverlay.classList.remove("show");
}

menuHambButton.addEventListener("click", () => {
  const isOpen = menuHambButton.classList.toggle("isOpen");
  navBarLinks.classList.toggle("show", isOpen);
  menuOverlay.classList.toggle("show", isOpen);
});


menuOverlay.addEventListener("click", closeMenu);


const menuLinks = document.querySelectorAll(".navbar-links a");
menuLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

