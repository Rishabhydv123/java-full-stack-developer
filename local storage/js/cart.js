const API = "https://fakestoreapi.com/products";

async function ApiCall() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    dataAppend(data);
  } catch (error) {
    console.log(error);
  }
}

ApiCall();

function dataAppend(data) {
  const mainDiv = document.querySelector("#mainData");

  data.forEach((el) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = el.image;

    const title = document.createElement("h3");
    title.innerText = el.title;

    const price = document.createElement("h4");
    price.innerText = `₹ ${el.price}`;

    const btn = document.createElement("button");
    btn.innerText = "Add to Cart";

    btn.addEventListener("click", () => addToCart(el));

    card.append(img, title, price, btn);
    mainDiv.append(card);
  });
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find(item => item.id === product.id);

  if (exists) {
    alert("Product already in cart");
    return;
  }

  const cartProduct = {
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    category: product.category,
    description: product.description,
    qty: 1
  };

  cart.push(cartProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart");
}
