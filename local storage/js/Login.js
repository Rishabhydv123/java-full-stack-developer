const storeData = JSON.parse(localStorage.getItem('userData')) || [];

const Login = () => {
  const userName = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('Loginpassword').value.trim();

  const findUser = storeData.find(el => el.user === userName);

  if (!findUser) {
    alert('User not found ❌');
    return;
  }

  if (findUser.pass !== password) {
    alert("Password doesn't match ❌");
    return;
  }

  const token =
    Math.random().toString(36).substring(2) +
    Math.random().toString(36).substring(2);

  sessionStorage.setItem('token', token);

  alert('Login Successful ✅');
  window.location.href = "/local storage/page/home.html";
};
