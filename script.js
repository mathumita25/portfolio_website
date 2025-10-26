// Toggle mobile menu
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Contact form behavior
const form = document.getElementById("contactForm");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusText.textContent = "Sending...";
  
  // Simulate sending message
  setTimeout(() => {
    statusText.textContent = "Message sent successfully!";
    form.reset();
  }, 1000);
});
