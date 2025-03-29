document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        alert("Message sent successfully!");
        form.reset();
    });
});
