const menu= document.getElementById("menu");
document.getElementById("menu-btn").addEventListener("click", toggleNav);
function toggleNav(e) {
  e.currentTarget.classList.toggle("active");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
