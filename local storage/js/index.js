const API = "https://fakestoreapi.com/products";

fetch(API)
  .then(res => res.json())
  .then(data => renderProducts(data));

function renderProducts(products) {
  const main = document.getElementById("mainData");
  main.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  products.forEach(p => {
    let item = cart.find(i => i.id === p.id);

    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${p.image}" width="120">
      <h4>${p.title}</h4>
      <p>₹ ${p.price}</p>

      ${
        item
          ? `
            <button onclick="changeQty(${p.id},-1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${p.id},1)">+</button>
          `
          : `<button onclick="addToCart(${p.id})">Add to Cart</button>`
      }
    `;
    main.appendChild(div);
  });

  updateCartCount();
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  fetch(API)
    .then(res => res.json())
    .then(products => {
      let product = products.find(p => p.id === id);
      product.qty = 1;
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderProducts(products);
    });
}

function changeQty(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(i => i.id === id);

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  fetch(API)
    .then(res => res.json())
    .then(data => renderProducts(data));
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let count = cart.reduce((a, b) => a + b.qty, 0);
  let span = document.getElementById("cartCount");
  if (span) span.innerText = count;
}

updateCartCount();


const btn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
