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

let operationLock = false;

numberElems.forEach(btnNumber => {
    btnNumber.addEventListener('click', event => {
        // Wenn unmittelbar vor Eingabe der aktuellen Zahl ein OperationButton
        //  gedrückt wurde, wird die Zahl "gesetzt" und nicht "hinzugefügt"
        if (operationLock) {
            resultElem.innerText = event.target.innerText;
            operationLock = false;
            return;
        }
        // Wenn der geclickte Button "," ist UND 
        //  resultElem bereits ein Komma enthält
        if (event.target.innerText == "," && 
            resultElem.innerText.includes(",")) {
            return;
        }
        if (resultElem.innerText == "0") {
            if(event.target.innerText == "0") {
                return;
            } else {
                resultElem.innerText = event.target.innerText;
                return;
            }
        }

        resultElem.innerText += event.target.innerText;
    });
});

/*
    C# foreach => JavaScript for
    Achtung: 2 Varianten:
        1. for in => Iteriert durch die Keys/Schlüssel/Member eines Objekts
        2. for of => Iteriert durch eine Liste/Array/IEnumerable
*/
for (btnOperation of operationElems) {
    btnOperation.addEventListener('click', event => {
        // Wenn nach der Eingabe von 2 Zahlen und einer entsprechenden Operation
        //  anstatt dem EqualsButton eine weiter Operation gewählt wird,
        //  berechnen wir zuerst das Ergebnis der vorherigen Operation
        const regex = /[+\-*\/]/; // Erstelle eine RegEx, die die Symbole +, -, *, oder / erkennt

        if (regex.test(subtotalElem.innerText)) {
            let number1 = subtotalElem.innerText.split(' ')[0];
            let number2 = resultElem.innerText;
            let operation = subtotalElem.innerText.split(' ')[1];
        
        
            resultElem.innerText = calculate(number1, number2, operation);
        }
        operationLock = true;
        let number = resultElem.innerText;
        let operation = event.target.innerText;
        subtotalElem.innerText = `${number} ${operation}`; // String-Interpolation
        // resultElem.innerText = "0"; // Alternative zur Operation-Lock
    });
}

function calculate(number1, number2, operation) {
    number1 = Number(number1);
    number2 = Number(number2);
    let result = 0;

    switch(operation) {
        case "+": {
            result = number1 + number2;
            break;
        }
        case "-": {
            result = number1 - number2;
            break;
        }
        case "*": {
            result = number1 * number2;
            break;
        }
        case "/": {
            result = number1 / number2;
            break;
        }
        default: {
            console.error("Operation-Type is not supported! Use either of these operations: + - * /")
        }
    }
    
    return result;
}
// console.log(calculate(1024, 42, '%'));


equalsElem.addEventListener('click', event => {
    let number1 = subtotalElem.innerText.split(' ')[0];
    let number2 = resultElem.innerText;
    let operation = subtotalElem.innerText.split(' ')[1];


    resultElem.innerText = calculate(number1, number2, operation);
});

/** TODOS:
 * Implement calculate for operation buttons
 * Insert floatingpoint numbers with 0-prefix (0,42)
 * Implement Delete, Clear and ClearAll
 * Seperator for number-pairs (1.000.000)
 */


