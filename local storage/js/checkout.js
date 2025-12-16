const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  alert("Cart is empty");
  window.location.href = "/local storage/index.html";
}

const tbody = document.getElementById("cartTableBody");
let total = 0;

cart.forEach((item, i) => {
  const tr = document.createElement("tr");
  const subtotal = item.price * item.qty;
  total += subtotal;

  tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${item.title}</td>
    <td><img src="${item.image}"></td>
    <td>₹ ${item.price}</td>
    <td>${item.qty}</td>
    <td>₹ ${subtotal.toFixed(2)}</td>
  `;

  tbody.appendChild(tr);
});

document.getElementById("totalAmount").innerText =
  `Total Amount: ₹ ${total.toFixed(2)}`;

document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Order placed successfully 🎉");
  localStorage.removeItem("cart");
  window.location.href = "/local storage/index.html";

});
