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
const clockElem = document.getElementById('clock');


/* camelCase */
function getTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    clockElem.innerText = time;
}

setInterval(() => {
    getTime();
},100);