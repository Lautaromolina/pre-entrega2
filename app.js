const button = document.querySelector(".hamburger-button");
const menuList = document.querySelector(".menu-list");

button.addEventListener("click", function () {
	menuList.classList.toggle("active");
});
