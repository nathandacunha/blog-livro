document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menuHamburguerButtonMobile");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("ativo");
  });
});
