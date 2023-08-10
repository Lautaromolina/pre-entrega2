document.addEventListener("DOMContentLoaded", function () {
	function checkScreenWidth() {
		const element = document.querySelector(".navegacion");
		const screenWidth = window.innerWidth;

		if (screenWidth <= 578) {
			element.classList.remove(".mobile-menu");
		} else {
			element.classList.add(".mobile-menu");
		}
	}

	checkScreenWidth();

	const button = document.querySelector(".hamburger-button");
	const menuList = document.querySelector(".menu-list");

	button.addEventListener("click", function () {
		menuList.classList.toggle("active");
	});

	window.addEventListener("resize", function () {
		checkScreenWidth();
	});
});
