const BASE_URL = "http://localhost:8080/userData";

const btn = document.getElementById("btn");

// checkbox enable/disable
function watchmanFunc() {
  btn.disabled = !document.getElementById("watchman").checked;
}

// form submit
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
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Saved:", data);
      alert("Data saved successfully");
      e.target.reset();
      btn.disabled = true;
    })
    .catch(err => console.error(err));
}
