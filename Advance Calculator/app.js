function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value.replace('×', '*').replace('÷', '/'));
    } catch (e) {
        display.value = 'Error';
    }
}
