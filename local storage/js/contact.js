document.getElementById("contactForm").addEventListener("submit", function (e) {
 e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("msg");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    msg.textContent = "";
    msg.style.color = "red";

    if (name === "") {
        msg.textContent = "❌ Please enter your name";
        return;
    }

    if (email === "") {
        msg.textContent = "❌ Please enter your email";
        return;
    }

    if (!emailPattern.test(email)) {
        msg.textContent = "❌ Please enter a valid email address";
        return;
    }

    if (message === "") {
        msg.textContent = "❌ Please enter your message";
        return;
    }

    if (message.length < 10) {
        msg.textContent = "❌ Message must be at least 15 characters long";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "✅ Message sent successfully";

    this.reset();

    setTimeout(() => {
        window.location.href = "/local storage/page/home.html";
    }, 1500);
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
