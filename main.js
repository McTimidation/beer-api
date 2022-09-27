let state = document.getElementById("stateInput");
let city = document.getElementById("cityInput");


let url = "https://api.openbrewerydb.org/breweries";
let urlState = "?by_state=";
let urlCity = "&by_city=";
let button = document.getElementById('button');

let sInput = state.value;
let cInput = city.value;

function getData() {
    fetch(url + urlState + state.value + urlCity + city.value + "&per_page=50")
        .then((response) => response.json())
        .then((data) => {
            let beer = `<h2>Breweries</h2>`
            for (let i = 0; i < data.length; i++) {
                beer += `<ul><li>${data[i].name}</li></ul>`
            }
            document.getElementById('Breweries').innerHTML = beer
        });
        console.log(urlCity);
        console.log(urlState);
        console.log(state.value);
        console.log(city);
        console.log(url + urlState + state.value + urlCity + city.value + "&per_page=50")
}
button.addEventListener('click', getData)
