document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("msg");

  if (name === "" || email === "" || message === "") {
    msg.style.color = "red";
    msg.textContent = "All fields are required!";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Message sent successfully ✔";

  this.reset();
});
