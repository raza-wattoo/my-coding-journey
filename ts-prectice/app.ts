const themeToggleBtn = document.getElementById("theme-toggle") as HTMLButtonElement | null;
const contactForm = document.getElementById("contact-form") as HTMLFormElement | null;
const nameInput = document.getElementById("name") as HTMLInputElement | null;
const emailInput = document.getElementById("email") as HTMLInputElement | null;
const formMsg = document.getElementById("form-msg") as HTMLParagraphElement | null;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        // Toggle class on body
        document.body.classList.toggle("dark-theme");

        // Check if dark theme is active
        if (document.body.classList.contains("dark-theme")) {
            themeToggleBtn.textContent = "☀️ Light Mode";
        } else {
            themeToggleBtn.textContent = "🌙 Dark Mode";
        }
    });
}

// Contact Form Validation
if (contactForm && nameInput && emailInput && formMsg) {
    contactForm.addEventListener("submit", (e: Event) => {
        e.preventDefault();

        const nameVal = nameInput.value.trim();
        const emailVal = emailInput.value.trim();

        if (nameVal === "" || emailVal === "") {
            formMsg.textContent = "⚠️ Please fill out all fields.";
            formMsg.style.color = "red";
        } else {
            formMsg.textContent = `✅ Thank you, ${nameVal}! Message sent successfully.`;
            formMsg.style.color = "green";
            contactForm.reset();
        }
    });
}