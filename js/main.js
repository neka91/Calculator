let firstValue = document.getElementById("firstValue");
let secondValue = document.getElementById("secondValue");
let output = document.getElementById("output");

function addBy() {
    if (firstValue.value && secondValue.value) {
        let term = firstValue.value + " + " + secondValue.value;
        let result = Number(firstValue.value) + Number(secondValue.value);
        displayOutput(term, result);
    } else {
        alert('Please indicate two values.');
    }
}

function subBy() {
    if (firstValue.value && secondValue.value) {
        let term = firstValue.value + " - " + secondValue.value;
        let result = Number(firstValue.value) - Number(secondValue.value);
        displayOutput(term, result);
    } else {
        alert('Please indicate two values.');
    }
}

function multBy() {
    if (firstValue.value && secondValue.value) {
        let term = firstValue.value + " * " + secondValue.value;
        let result = Number(firstValue.value) * Number(secondValue.value);
        displayOutput(term, result);
    } else {
        alert('Please indicate two values.');
    }
}

function divBy() {
    if (firstValue.value && secondValue.value) {
        let term = firstValue.value + " / " + secondValue.value;
        let result = Number(firstValue.value) / Number(secondValue.value);
        displayOutput(term, result);
    } else {
        alert('Please indicate two values.');
    }
}

function displayOutput(term, result) {
    output.innerHTML += term + " = " + result + "<br>";
}

function empty() {
    firstValue.value = '';
    secondValue.value = '';
    output.innerText = '';
}
