let state = document.getElementById("stateInput");
let city = document.getElementById("cityInput");


let url = "https://api.openbrewerydb.org/breweries";
let urlState = "?by_state=" + state.value;
let urlCity = "&by_city=" + city.value;
let button = document.getElementById('button');

function getData() {
    fetch(url + urlState + urlCity + "&per_page=50")
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
        console.log(city.value);
        console.log(url+urlState+urlCity+'&per_page=50')
}
button.addEventListener('click', getData)
