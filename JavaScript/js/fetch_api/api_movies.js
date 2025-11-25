const apikey = '67cf508d'

async function apiCall(value) {
    const apiURL = `https://www.omdbapi.com/?apikey=${apikey}&s=${value}`;
    let res = await fetch(apiURL);
    let data = await res.json();
    UI(data.Search);
};

const inputvalue = () => {
    let inputvalue = document.querySelector('#input').value;
    apiCall(inputvalue);
};

const UI = (data) => {
    console.log(data);
    const mainDiv = document.querySelector('#container');

    mainDiv.innerHTML ='';

    
    data.map((el, i) => {
    let cardDiv = document.createElement("div");
    let img = document.createElement("img");
    let imdbID = document.createElement("p");
    let Title = document.createElement("h1");
    let Type = document.createElement("h2");
    let Year = document.createElement("h3");

     cardDiv.className = `div_${i+1}`;

    img.src = el.Poster;
    imdbID.innerText = `id ${el.imbdID}`;
    Title.innerText = `Title ${el.Title}`;
    Type.innerText = `Type ${el.Type}`;
    Year.innerText = `Year ${el.Year}`;

    cardDiv.append(
        img,imdbID,Title,Type,Year
    );
     mainDiv.append(cardDiv);
    });
}


