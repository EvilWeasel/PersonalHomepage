/*
    variable uhr
    getTime function
    1s timer
*/
/*
    DOM => Document Object Model
        => mein HTML-Dokument
        => Die im Browser gerenderte Version,
            meines HTML-Dokuments
*/
/* const => Konstante Variable => Ändert sich nicht */
const clockElem = document.getElementById('clock');
/* let => Modifizierbare Variable => Kann geändert werden */
let x = 10; /* 10 => Number */
x = 15;

/* camelCase */
/**
 * public string GetTime() {...}
 */
function getTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    clockElem.innerText = time;
}
/* Python => def getTime(): */

/* setInterval(getTime, 100) */
/* setInterval => WebAPI */
setInterval(() => {
    let date = new Date();
    let time = date.toLocaleTimeString();
    clockElem.innerText = time;
}, 100);

const searchElem = document.getElementById('search');
const searchFieldElem = document.getElementById('search-field');
const searchString = "https://duckduckgo.com/?q=";

/* EventListener => suchfeld öffnen SPACEBAR */
document.addEventListener("keydown", event => {
    /* console.log(event); */
    if(event.key == " ") {
        searchFieldElem.value = '';
        searchElem.style.display = 'flex';
        searchFieldElem.focus();
    } else if (event.key == "Escape") {
        searchFieldElem.blur();
        searchElem.style.display = 'none';
    }
});

searchFieldElem.addEventListener("keydown", event => {
    if (event.key == "Enter") {
        let query = searchFieldElem.value;
        /* Öffne im aktuellen Tab die Seite mit der angegebenen
            URL */
        window.open(searchString + query, "_self");
    }
});

/* EventListener => suche starten ENTER */

/* EventListener => suchfeld schließt ESC */




const jokeElem = document.querySelector('[data-joke]');
// Rufe die Chuck-Norris API auf und hole einen zufälligen
//  Witz aus der Kategorie "DEV"
fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(httpResponse => {
        return httpResponse.json();
    }).then(joke => {
        jokeElem.innerText = joke.value;
    });



const pokeInput = document.querySelector('[data-pokeInput]');
const pokeButton = document.querySelector('#btnPokeSearch');
const pokeElem = document.querySelector('[data-poke]');
pokeButton.addEventListener('click', event => {
    pokeElem.innerText = "";
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokeInput.value)
        .then(httpResponse => httpResponse.json())
        .then(pokemon => fetch(pokemon.location_area_encounters)
            .then(httpResponse => httpResponse.json())
            .then(locationList => {
                console.log(locationList)
                for (catchLocation of locationList) {
                    pokeElem.innerText += catchLocation.location_area.name + ', ';
                }
            })
        )
});
