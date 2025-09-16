// 🟢 Navigation Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    let sectionId = this.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 🟢 Console message
console.log("✅ Portfolio website loaded successfully!");

// 🟢 Skills Progress Bar Animation
const skills = document.querySelectorAll(".skill-level");

function showSkills() {
  skills.forEach(skill => {
    let skillWidth = skill.style.width; // HTML me diya gaya width
    skill.style.width = "0"; // Reset for animation
    setTimeout(() => {
      skill.style.transition = "width 2s ease-in-out";
      skill.style.width = skillWidth; // Animate
    }, 300);
  });
}

// Trigger skills animation when section visible
window.addEventListener("scroll", () => {
  let skillsSection = document.querySelector("#skills");
  let sectionPosition = skillsSection.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.2;

  if (sectionPosition < screenPosition) {
    showSkills();
  }
});

// 🟢 Contact Form Validation + Popup
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = form.querySelector("input[type='text']").value.trim();
  let email = form.querySelector("input[type='email']").value.trim();
  let message = form.querySelector("textarea").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠ Please fill in all fields.");
    return;
  }

  // Simple email regex check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you, " + name + "! Your message has been sent successfully.");
  form.reset();
});