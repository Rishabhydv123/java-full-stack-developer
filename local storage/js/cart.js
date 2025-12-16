function getCartData() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  renderCart(cart);
}

getCartData();

function renderCart(cart) {
  const mainDiv = document.getElementById("mainData");
  const totalDiv = document.getElementById("total");

  mainDiv.innerHTML = "";
  totalDiv.innerHTML = "";

  if (cart.length === 0) {
    mainDiv.innerHTML = "<h2>Cart is Empty</h2>";
    return;
  }

  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price * item.qty;

    const card = document.createElement("div");

    card.innerHTML = `
      <img src="${item.image}">
      <h3>${item.title}</h3>
      <h4>₹ ${item.price}</h4>
      <div>
        <button onclick="updateQty(${index}, -1)">-</button>
        <span style="margin:0 10px">${item.qty}</span>
        <button onclick="updateQty(${index}, 1)">+</button>
      </div>
      <br>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    mainDiv.appendChild(card);
  });

  totalDiv.innerHTML = `
    Total: ₹ ${totalPrice.toFixed(2)}
    <br>
    <button id="checkoutBtn" onclick="goCheckout()">Checkout</button>
  `;
}



function updateQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].qty += change;

  if (cart[index].qty < 1) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getCartData();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getCartData();
}

function goCheckout() {
  window.location.href = "/local storage/page/checkout.html";
}


