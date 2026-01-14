const API = "https://fakestoreapi.com/products";
let allProducts = [];

fetch(API)
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    createSortFilterUI(data);
    renderProducts(data);
  });

function createSortFilterUI(products) {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.gap = "15px";
  container.style.padding = "15px";

   container.className = "sort-filter-container";

  const sortSelect = document.createElement("select");
  sortSelect.innerHTML = `
    <option value="">Sort By Price</option>
    <option value="low-high">Low to High</option>
    <option value="high-low">High to Low</option>
  `;

  const filterSelect = document.createElement("select");
  filterSelect.innerHTML = `<option value="all">All Categories</option>`;

  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.innerText = cat.toUpperCase();
    filterSelect.appendChild(option);
  });

  sortSelect.addEventListener("change", applySortFilter);
  filterSelect.addEventListener("change", applySortFilter);

  container.append(sortSelect, filterSelect);

  const main = document.getElementById("mainData");
  document.body.insertBefore(container, main);
}

function applySortFilter() {
  const sortValue = document.querySelector("select").value;
  const filterValue = document.querySelectorAll("select")[1].value;

  let filtered = [...allProducts];

  if (filterValue !== "all") {
    filtered = filtered.filter(p => p.category === filterValue);
  }

  if (sortValue === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

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

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = allProducts.find(p => p.id === id);

  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  renderProducts(allProducts);
}

function changeQty(id, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));
  renderProducts(allProducts);
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const span = document.getElementById("cartCount");
  if (span) span.innerText = count;
}

updateCartCount();



