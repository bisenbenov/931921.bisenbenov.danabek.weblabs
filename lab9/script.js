const valueText = document.querySelector('#valueText');
let button = document.querySelectorAll('.button');

function addNumber(newNumber) {
    let numberLength = valueText.value.toString().length;
    if (valueText.value==0 && newNumber!="." && numberLength < 2) {
        valueText.value = newNumber;
    }
    else {
        valueText.value += newNumber;
    }
}

function addOperation(operation) {
    valueText.value += " " + operation + " ";
}

function clearAll() {
    valueText.value = '0';
}

function backSpace() {
    let string = valueText.value.toString();
    valueText.value = string.slice(0, -1);
}

function calculate() {
    let result = eval(valueText.value);
    valueText.value = result;
}