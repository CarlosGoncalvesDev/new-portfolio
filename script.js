const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let formStatus = document.getElementById("form-status");
        fetch(this.action, {
            method: this.method,
            body: new FormData(this),
            headers: { "Accept": "application/json" }
        })
            .then(response => {
                if (response.ok) {
                    showMessage("Message sent successfully!", "success");
                    this.reset();
                } else {
                    showMessage("Error sending the message. Please try again.", "error");
                }
            })
            .catch(() => {
                showMessage("Error sending the message. Check your connection.", "error");
            });
    });

    function showMessage(message, type) {
        let formStatus = document.getElementById("form-status");
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = "block";

        setTimeout(() => {
            formStatus.style.opacity = "0";
            setTimeout(() => {
                formStatus.style.display = "none";
                formStatus.style.opacity = "1";
            }, 500);
        }, 2000);
    }
});
