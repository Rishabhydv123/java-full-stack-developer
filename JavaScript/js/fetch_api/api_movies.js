const apikey = '67cf508d'

async function apiCall() {
    const apiurl = 'http://www.omdbapi.com/?apikey=${apikey}&s=${value}'
    let res = await fetch(API);
    let data = await res.json();
    UI = (data.Search);
}

const inputvalue = () => {
    let inputvalue = document.querySelector('#input').ariaValueMax;
    apiCall(inputvalue);
}

const UI =(data) => {
    console.log(data);
    const mainDiv = document.querySelector('#container');

    
    data.map((el, i) =>{
    let cardDiv = document.createElement("div");
    let img = document.createElement("img");
    let imdbID = document.createElement("p");
    let Title = document.createElement("h1");
    let Type = document.createElement("h2");
    let Year = document.createElement("h3");

     cardDiv.className = `div_${i+1}`;





    cardDiv.append(
        img,imdbID,Title,Type,Year
    );

    content.append(cardDiv);
    });
}