const BASE_URL = "http://localhost:8080/userData";

const btn = document.getElementById("btn");
const form = document.getElementById("myForm");
const watchman = document.getElementById("watchman");

watchman.addEventListener("change", () => {
  btn.disabled = !watchman.checked;
});

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const country = document.getElementById("country").value;
  const genderEl = document.querySelector('input[name="gender"]:checked');

  if (!genderEl) {
    alert("Select gender");
    return;
  }

  const userData = {
    email,
    pass,
    gender: genderEl.value,
    country
  };

  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(() => {
      alert("Data saved successfully ✅");
      form.reset();
      btn.disabled = true;
    })
    .catch(err => console.error(err));
}

