const API = "https://fakestoreapi.com/products";
let allProducts = [];

// ---------- FETCH PRODUCTS ----------
fetch(API)
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    renderProducts(allProducts);
    setupCategoryFilter(allProducts);
  });

// ---------- RENDER PRODUCTS ----------
function renderProducts(products) {
  const main = document.getElementById("mainData");
  main.innerHTML = "";

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  products.forEach(p => {
    const item = cart.find(i => i.id === p.id);

    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${p.image}" width="120">
      <h4>${p.title}</h4>
      <p>₹ ${p.price}</p>

      ${
        item
          ? `
            <button onclick="changeQty(${p.id}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${p.id}, 1)">+</button>
          `
          : `<button onclick="addToCart(${p.id})">Add to Cart</button>`
      }
    `;
    main.appendChild(div);
  });

  updateCartCount();
}

// ---------- ADD TO CART ----------
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = allProducts.find(p => p.id === id);

  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  renderProducts(getFilteredProducts());
}

// ---------- CHANGE QTY ----------
function changeQty(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));
  renderProducts(getFilteredProducts());
}

// ---------- SORT ----------
const sortSelect = document.getElementById("sortby");
sortSelect.addEventListener("change", () => {
  renderProducts(getFilteredProducts());
});

// ---------- CATEGORY FILTER ----------
const categorySelect = document.getElementById("filterBy");

function setupCategoryFilter(products) {
  const categories = ["all", ...new Set(products.map(p => p.category))];

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.innerText = cat.toUpperCase();
    categorySelect.appendChild(option);
  });
}

categorySelect.addEventListener("change", () => {
  renderProducts(getFilteredProducts());
});

// ---------- APPLY SORT + FILTER ----------
function getFilteredProducts() {
  let products = [...allProducts];

  // category filter
  const category = categorySelect.value;
  if (category && category !== "all") {
    products = products.filter(p => p.category === category);
  }

  // price sort
  const sortValue = sortSelect.value;
  if (sortValue === "low-to-high") {
    products.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high-to-low") {
    products.sort((a, b) => b.price - a.price);
  }

  return products;
}

// ---------- CART COUNT ----------
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const span = document.getElementById("cartCount");
  if (span) span.innerText = count;
}
updateCartCount();

// ---------- SCROLL TO TOP ----------
const btn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
