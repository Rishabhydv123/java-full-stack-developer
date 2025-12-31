// export const sumOfTwoNumber = (a, b) => {
//   return a + b;
// };

// export const subOfTwoNumber = (a, b) => {
//   return a - b;
// };

// export { sumOfTwoNumber, subOfTwoNumber };

// name export


//====================================================================================================================//


// const sumOfTwoNumber = (a, b) => {
//   return a + b;
// };

// const subOfTwoNumber = (a, b) => {
//   return a - b;
// };

// export default { sumOfTwoNumber, subOfTwoNumber };

// default export



export const navbar = () => {
  return `
    <div class="logo">
      <img src="https://fakestoreapi.com/icons/logo.png" height="60" width="60">
    </div>

    <ul>
      <li onclick="window.location='/local storage/page/home.html'">Home</li>
      <li onclick="window.location='/local storage/index.html'">Products</li>
      <li onclick="window.location='/local storage/page/Contact.html'">Contact</li>
    </ul>

    <ul id="authSection"></ul>
  `;
};

window.addEventListener("DOMContentLoaded", () => {
  const authSection = document.getElementById("authSection");
  const token = sessionStorage.getItem("token");
  const user = sessionStorage.getItem("loggedUser");

  if (token && user) {
    authSection.innerHTML = `
      <li>👤 ${user}</li>
      <li onclick="goToCart()">Cart 🛒 <span id="cartCount">0</span></li>
      <li onclick="logout()">Logout</li>
    `;
  } else {
    authSection.innerHTML = `
      <li onclick="goToCart()">Cart 🛒 <span id="cartCount">0</span></li>
      <li onclick="window.location='/local storage/page/Login.html'">Login</li>
      <li onclick="window.location='/local storage/page/Signup.html'">Signup</li>
    `;
  }

  updateCartCount();
});

window.updateCartCount = function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  let total = 0;
  cart.forEach(item => total += item.qty);
  cartCount.innerText = total;
};

window.goToCart = function () {
  const token = sessionStorage.getItem("token");

  if (!token) {
    alert("Pehle login karo, uske baad cart access milega ❌");
    window.location.href = "/local storage/page/Login.html";
  } else {
    window.location.href = "/local storage/page/cart.html";
  }
};

window.logout = function () {
  sessionStorage.clear();
  alert("Logout Successful 👋");
  window.location.href = "/local storage/page/Login.html";
};
