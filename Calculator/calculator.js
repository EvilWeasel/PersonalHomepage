// alert("Hallo Welt!");
// DRY-Code
// Do not Repeat Yourself

// ButtonElements
// Numbers (0-9 ,)
const numberElems = document.querySelectorAll('[data-number]');
// Equals
const equalsElem = document.querySelector('[data-equals]');
// Operations
const operationElems = document.querySelectorAll('[data-operation]');
// Delete
const deleteElem = document.querySelector('[data-delete]');
// ClearAll (C)
const clearAllElem = document.querySelector('[data-c]');
// ClearResult (CE)
const clearResultElem = document.querySelector('[data-ce]');

// Display Elements
// Subtotal => Zwischenergebnis
const subtotalElem = document.querySelector('#previous-operand');
// Result => Ergebnis
const resultElem = document.querySelector('#current-operand');

numberElems.forEach(btnNumber => {
    btnNumber.addEventListener('click', event => {
        // Wenn der geclickte Button "," ist UND 
        //  resultElem bereits ein Komma enthält
        if (event.target.innerText == "," && 
            resultElem.innerText.includes(",")) {
            return;
        }
        resultElem.innerText += event.target.innerText;
        // todo: operationen implementieren
    });
});

