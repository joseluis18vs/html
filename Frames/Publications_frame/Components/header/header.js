let headerNav = document.querySelector(".main_header__navBar");
let menuShowToggle = document.querySelector(".navBar_menuBtn_toggle");

menuShowToggle.addEventListener("click", () => {
    headerNav.classList.toggle("show");
})