const API = 'https://fakestoreapi.com/products';

async function ApiCall() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    dataAppend(data);
  } catch (error) {
    console.log(' ~ error:', error);
  }
}

ApiCall();

function dataAppend(value) {
  const mainDiv = document.querySelector('#mainData');

  value.forEach((el) => {
    const childDiv = document.createElement('div');

    const id = document.createElement('h3');
    const img = document.createElement('img');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('h3');
    const category = document.createElement('h3');

    const btn = document.createElement('button');

    id.innerText = el.id;
    img.src = el.image;
    title.innerText = el.title;
    description.innerText = el.description;
    price.innerText = el.price;
    category.innerText = el.category;

    btn.innerText = "Add to Cart";

    btn.addEventListener("click", () => {
      addToCart(el);
    });

    childDiv.append(id, img, title, description, price, category, btn);
    mainDiv.append(childDiv);
  });
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find(item => item.id === product.id);

  if (exists) {
    alert("Already added in cart");
  } else {
    product.qty = 1; 
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  }
}
