const screenDisplay = document.querySelector('.screen-display');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear-screen');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.result');

let currentInput = '0';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (currentInput === '0') {
            currentInput = number.textContent;
        } else {
            currentInput += number.textContent;
        }
        screenDisplay.textContent = currentInput;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentInput += ' ' + operator.textContent + ' ';
        screenDisplay.textContent = currentInput;
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '0';
    screenDisplay.textContent = currentInput;
});

decimalButton.addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        screenDisplay.textContent = currentInput;
    }
});

equalsButton.addEventListener('click', () => {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        screenDisplay.textContent = currentInput;
    } catch (error) {
        screenDisplay.textContent = 'Error';
    }
});