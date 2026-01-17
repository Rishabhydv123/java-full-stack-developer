const storeData = JSON.parse(localStorage.getItem("userData")) || [];

const signUp = () => {
  const userName = document.getElementById("signUsername").value.trim();
  const age = document.getElementById("SignAge").value.trim();
  const password = document.getElementById("signPassword").value.trim();

  const errorMsg = document.getElementById("signupError");
  const successMsg = document.getElementById("signupSuccess");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (userName === "" || age === "" || password === "") {
    errorMsg.textContent = "❌ All fields are required";
    return;
  }

  if (age <= 0 || age > 100) {
    errorMsg.textContent = "❌ Please enter a valid age";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "❌ Password must be at least 6 characters";
    return;
  }

  const userExists = storeData.some((el) => el.user === userName);
  if (userExists) {
    errorMsg.textContent = "❌ Username already exists";
    return;
  }

  const singlePersonData = {
    user: userName,
    age: Number(age),
    pass: password,
  };

  storeData.push(singlePersonData);
  localStorage.setItem("userData", JSON.stringify(storeData));

  successMsg.textContent = "✅ Signup successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "/local storage/page/Login.html";
  }, 1500);
};

