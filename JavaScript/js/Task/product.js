const products = [
  { id:1, name:"Laptop", price:"$999" },
  { id:2, name:"Phone", price:"$699" },
  { id:3, name:"Headphones", price:"$199" },
  { id:1, name:"Laptop", price:"$999" },
  { id:2, name:"Phone", price:"$699" },
  { id:3, name:"Headphones", price:"$199" },
  { id:1, name:"Laptop", price:"$999" },
  { id:2, name:"Phone", price:"$699" },
  { id:3, name:"Headphones", price:"$199" },
  { id:3, name:"Headphones", price:"$199" },
  { id:1, name:"Laptop", price:"$999" },
  { id:2, name:"Phone", price:"$699" },
  { id:3, name:"Headphones", price:"$199" },
  { id:1, name:"Laptop", price:"$999" },
  { id:2, name:"Phone", price:"$699" },
  { id:3, name:"Headphones", price:"$199" },
  { id:1, name:"Laptop", price:"$999" },
  { id:2, name:"Phone", price:"$699" },
];

function getFav(){
  return JSON.parse(localStorage.getItem("fav") || "[]");
}

function saveFav(fav){
  localStorage.setItem("fav", JSON.stringify(fav));
}

function addFav(id){
  let fav = getFav();
  if(!fav.includes(id)){
    fav.push(id);
    saveFav(fav);
    alert("Added to favorites!");
  } else {
    alert("Already in favorites.");
  }
}

function removeFav(id){
  let fav = getFav().filter(x => x !== id);
  saveFav(fav);
  loadFavorites();
}

function loadProducts(){
  const box = document.getElementById("productList");
  box.innerHTML = "";
  products.forEach(p=>{
    box.innerHTML += `
      <div class="box">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="addFav(${p.id})"> Add to Favorites</button>
      </div>
    `;
  });
}

function loadFavorites(){
  const fav = getFav();
  const box = document.getElementById("favoriteList");
  box.innerHTML = "";

  if(fav.length === 0){
    box.innerHTML = "<p>No favorites yet.</p>";
    return;
  }

  fav.forEach(id=>{
    let p = products.find(x=>x.id===id);
    box.innerHTML += `
      <div class="box">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button onclick="removeFav(${id})">Remove</button>
      </div>
    `;
  });
}

function showPage(page){
  document.getElementById("productsPage").style.display = "none";
  document.getElementById("favoritesPage").style.display = "none";
  document.getElementById(page).style.display = "block";

  if(page === "favoritesPage") loadFavorites();
}

loadProducts();
