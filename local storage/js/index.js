const API = "https://fakestoreapi.com/products";

fetch(API)
  .then(res => res.json())
  .then(data => renderProducts(data));

function renderProducts(data) {
  const main = document.getElementById("mainData");
  main.innerHTML = "";

  data.forEach(el => {
    const div = document.createElement("div");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(i => i.id === el.id);

    div.innerHTML = `
      <img src="${el.image}" width="150">
      <h3>${el.title}</h3>
      <p>₹ ${el.price}</p>

      <button onclick="updateCart(${el.id}, -1)">-</button>
      <span id="qty-${el.id}">${item ? item.qty : 0}</span>
      <button onclick="updateCart(${el.id}, 1)">+</button>
    `;

    main.appendChild(div);
  });

  updateCartCount();
}

function updateCart(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  fetch(API)
    .then(res => res.json())
    .then(products => {
      let product = products.find(p => p.id === id);
      let item = cart.find(i => i.id === id);

      if (!item && change === 1) {
        product.qty = 1;
        cart.push(product);
      } else if (item) {
        item.qty += change;
        if (item.qty <= 0) {
          cart = cart.filter(i => i.id !== id);
        }
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      document.getElementById(`qty-${id}`).innerText =
        cart.find(i => i.id === id)?.qty || 0;

      updateCartCount();
    });
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((sum, i) => sum + i.qty, 0);
  const span = document.getElementById("cartCount");
  if (span) span.innerText = count;
}
