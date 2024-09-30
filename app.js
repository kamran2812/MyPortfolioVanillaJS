const toggleButton = document.getElementById("toggleBtn");
const navMenuMobile = document.querySelector(".nav-items-mobile");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("open");
  if (navMenuMobile.classList.contains("show")) {
    // Hide the menu
    navMenuMobile.classList.remove("show");
    setTimeout(() => {
      navMenuMobile.style.display = "none"; // Set display to none after the transition
    }, 500); // Match the transition duration
  } else {
    // Show the menu
    navMenuMobile.style.display = "flex"; // Set display to flex before the transition
    navMenuMobile.style.transition =
      "transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out"; // Set display to flex before the transition
    setTimeout(() => {
      navMenuMobile.classList.add("show");
    }, 100); // Slight delay to ensure the display property is applied before transition
  }
});

// Optional: Smooth scrolling for better user experience
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute("href"));

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();
});
