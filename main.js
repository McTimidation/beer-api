let state = document.getElementById("stateInput").value;
let city = document.getElementById("cityInput").value;
let url = "https://api.openbrewerydb.org/breweries"
let urlState = "?by_state=" + state
let urlCity = "&by_city=" + city
let button = document.getElementById('button')


function getData() {

    
    fetch(url + urlState + urlCity + "&per_page=50")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let beer = `<h2>Breweries</h2>`
            for (let i = 0; i < data.length; i++) {
                beer += `<ul><li>${data[i].name}</li></ul>`
            }
            document.getElementById('Breweries').innerHTML = beer
        })
}
button.addEventListener('click', getData)
