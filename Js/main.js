let mobileBtn = document.querySelector(".burger");
let mobileMenu = document.querySelector(".mobile-nav__list");

mobileBtn.addEventListener("click", function() {
  mobileMenu.classList.add("mobile-nav__list--active")
});
