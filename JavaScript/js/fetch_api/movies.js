API = `https://api.tvmaze.com/search/shows?q=girl`;

async function apiCall() {
    let res = await fetch(API);
    let data = await res.json();
    appendData(data)
}
const appendData = (value) => {
    const content = document.getElementById("container");

value.map((el, i, arr) => {
    let show = el.show;

    let cardDiv = document.createElement("div");
    let name_created = document.createElement("h2");
    let lang_created = document.createElement("p");
    let rating_created = document.createElement("p");
    let img_created = document.createElement("img");

    cardDiv.className = `div_${i+1}`;

    name_created.innerText = show.name;
    lang_created.innerText = "Language: " + show.language;
    rating_created.innerText = "Rating: " + 9.9;
    img_created.src = el.image ;

    cardDiv.append(
        name_created,
        img_created,
        lang_created,
        rating_created
    );

        content.append(cardDiv);
    });
};
