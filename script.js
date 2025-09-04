// ===============================
// INTERACTIVITY & EVENTS
// ===============================

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") 
        ? "☀️ Light Mode" 
        : "🌙 Dark Mode";
});

// ===============================
// COUNTER FEATURE
// ===============================
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
    count--;
    counterDisplay.textContent = count;
});
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});

// ===============================
// FAQ DROPDOWN
// ===============================
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        answer.classList.toggle("hidden");
    });
});

// ===============================
// FORM VALIDATION
// ===============================
document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submission
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let message = document.getElementById("formMessage");

    // Regex for email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset message
    message.textContent = "";
    message.style.color = "red";

    if (name.length < 2) {
        message.textContent = "❌ Name must be at least 2 characters.";
    } else if (!emailPattern.test(email)) {
        message.textContent = "❌ Enter a valid email address.";
    } else if (password.length < 6) {
        message.textContent = "❌ Password must be at least 6 characters.";
    } else if (password !== confirm) {
        message.textContent = "❌ Passwords do not match!";
    } else {
        message.textContent = "✅ Form submitted successfully!";
        message.style.color = "green";

        // Reset form fields
        document.getElementById("signupForm").reset();
    }
});
