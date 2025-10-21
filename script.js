
// Navbar toggle for mobile view
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Optional: close menu when a link is clicked (for better UX)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}


// Live Time Script 
const getTime = document.querySelector('#time');

// Function to update time in milliseconds
function updateTime() {
  if (getTime) {
    getTime.textContent = Date.now(); // only runs if #time exists
  }
}

// Initial render
updateTime();

// Optional: update every second
setInterval(updateTime, 1000);




// Contact Form Validation
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Input fields
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    // Error + success
    const nameError = document.querySelector("#test-contact-error-name");
    const emailError = document.querySelector("#test-contact-error-email");
    const subjectError = document.querySelector("#test-contact-error-subject");
    const messageError = document.querySelector("#test-contact-error-message");
    const successMsg = document.querySelector("#test-contact-success");

    // Reset errors
    [nameError, emailError, subjectError, messageError].forEach(err => err.textContent = "");
    successMsg.textContent = "";

    let valid = true;

    // Validate
    if (!name.value.trim()) {
      nameError.textContent = "Full name is required.";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      emailError.textContent = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    }

    if (!subject.value.trim()) {
      subjectError.textContent = "Subject is required.";
      valid = false;
    }

    if (!message.value.trim()) {
      messageError.textContent = "Message is required.";
      valid = false;
    } else if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    // Success
   if (valid) {
      successMsg.textContent = "Message sent successfully!";
      successMsg.style.display = "block";
      contactForm.reset();

      // auto-hide message after 5 seconds
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 5000);
    }
  });
}