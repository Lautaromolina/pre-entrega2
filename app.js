document.addEventListener("DOMContentLoaded", function () {
	// Function to check screen width and adjust menu
	function checkScreenWidth() {
		const element = document.querySelector(".navegacion");
		const screenWidth = window.innerWidth; // Screen width

		if (screenWidth <= 578) {
			element.classList.remove(".mobile-menu"); // Replace with actual class name
		} else {
			element.classList.add(".mobile-menu"); // Replace with actual class name // Replace with actual class name
		}
	}

	// Initial check of screen width on page load
	checkScreenWidth();

	// Event listener for hamburger button
	const button = document.querySelector(".hamburger-button");
	const menuList = document.querySelector(".menu-list");

	button.addEventListener("click", function () {
		menuList.classList.toggle("active");
	});

	// Event listener to check screen width on window resize
	window.addEventListener("resize", function () {
		checkScreenWidth();
	});
});
