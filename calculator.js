const screenDisplay = document.querySelector('.screen-display');
const numbers = document.querySelectorAll('.numbers');
const clearButton = document.querySelector('.clear-screen');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.result');
// const additionButton = document.querySelector('.addition');
// const subtractionButton = document.querySelector('.subtraction');
// const divisionButton = document.querySelector('.division');
const operators = document.querySelectorAll('.operator'); // take in all operators




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
        currentInput += ' ';
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

// additionButton.addEventListener('click', () => {
//     currentInput += ' + ';
//     screenDisplay.textContent = currentInput;
// });

// subtractionButton.addEventListener('click', () => {
//     currentInput -= ' - ';
//     screenDisplay.textContent = currentInput;
// });
// divisionButton.addEventListener('click', () => {
//     currentInput /= '/';
//     screenDisplay.textContent = currentInput;
// });  no need for individual, fixing with operators function

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentInput += ' ' + operator.textContent + ' ';
        screenDisplay.textContent = currentInput;
    });
});