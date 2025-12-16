const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  alert("Cart is empty");
  window.location.href = "/local storage/index.html";
}

const tbody = document.getElementById("cartTableBody");

let total = 0;

cart.forEach((item, i) => {
  const subtotal = item.price * item.qty;
  total += subtotal;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${item.title}</td>
    <td>
      <img src="${item.image}" width="60" height="60">
    </td>
    <td>₹ ${item.price}</td>
    <td>${item.qty}</td>
    <td>₹ ${subtotal.toFixed(2)}</td>
  `;

  tbody.appendChild(tr);
});

const gst = total * 0.18;
const grandTotal = total + gst;

document.getElementById("totalAmount").innerHTML = `
  <h3>Subtotal: ₹ ${total.toFixed(2)}</h3>
  <h3>GST (18%): ₹ ${gst.toFixed(2)}</h3>
  <h2>Grand Total: ₹ ${grandTotal.toFixed(2)}</h2>
  <button onclick="placeOrder()">Place Order</button>
`;

function placeOrder() {
  alert("Order placed successfully 🎉");
  localStorage.removeItem("cart");
  window.location.href = "/local storage/index.html";
}
