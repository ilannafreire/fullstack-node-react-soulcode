const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');


let currentInput = '';
let operator = '';
let firstOperand = '';
let shouldResetInput = false;


function initializeCalculator() {
    buttons.forEach((button) => {
        const value = button.getAttribute('data-value');

        
        button.addEventListener('click', () => handleButtonClick(value));
    });
}


function handleButtonClick(value) {
    if (isNumber(value)) {
        appendNumber(value);
    } else if (value === '.') {
        appendDecimal();
    } else if (value === 'C') {
        clearDisplay();
    } else if (value === '=') {
        calculate();
    } else if (value === '%') {
        setOperator('%');
    } else {
        setOperator(value);
    }
}


function isNumber(value) {
    return !isNaN(value);
}


function appendNumber(number) {
    if (shouldResetInput) {
        currentInput = ''; 
        shouldResetInput = false;
    }

    if (currentInput === '0' && number !== '.') {
        currentInput = number; 
    } else {
        currentInput += number;
    }
    updateDisplay();
}


function appendDecimal() {
    if (shouldResetInput) {
        currentInput = '0.';
        shouldResetInput = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}


function updateDisplay() {
    display.textContent = currentInput || '0';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    shouldResetInput = false;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== '') {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    shouldResetInput = true;
}

function calculate() {
    if (firstOperand === '' || operator === '' || currentInput === '') return;

    const a = parseFloat(firstOperand);
    const b = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b === 0 ? 'Erro' : a / b;
            break;
        case '%':
            result = (a * b) / 100;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    firstOperand = '';
    shouldResetInput = true;
    updateDisplay();
}


document.addEventListener('DOMContentLoaded', initializeCalculator);
