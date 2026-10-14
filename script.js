
const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

// Open and close mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Typing effect
const role = document.querySelector("#role");
const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "AI Integration Learner"
];

let roleIndex = 0;

function changeRole() {
  roleIndex = (roleIndex + 1) % roles.length;
  role.textContent = roles[roleIndex];
}

setInterval(changeRole, 2000);

// Contact form
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `${message}\n\nFrom: ${name}\nEmail: ${email}`
  );

  formStatus.textContent = "Opening your email application...";

  window.location.href =
    `mailto:shikhakumari25@navgurukul.org?subject=${subject}&body=${body}`;
});

// Automatically update the footer year
document.querySelector("#year").textContent = new Date().getFullYear();