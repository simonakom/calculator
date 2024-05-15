let calculationPerformed = false;

function appendNumberToActiveInput(number) {
    let operationInput = document.getElementById('operation');
    let currentOperation = operationInput.value;
    operationInput.style.display = 'inline';

    // Clear
    if (number === 'c') {
        location.reload();
        return;
    }
    // Check if calculation is performed
    if (calculationPerformed) {
        return;
    }
    // Fixed operation input
    if (currentOperation.length >= 10) {
        return;
    }
    // Block inout when '²' or '%'
    if (currentOperation.endsWith('²') || currentOperation.endsWith('%')) {
        return;
    }
    // Check if a mathematical sign already exists
    if (currentOperation.match(/[+\-*/²%]/) && number.match(/[+\-*/²%]/)) {
        return;
    }

    operationInput.value += number;
}


function calculate() {
    let operationInput = document.getElementById('operation');
    let resultInput = document.getElementById('result');
    let operation = operationInput.value;

    // Disable input
    calculationPerformed = true;

    let [num1, operator, num2] = operation.split(/([+\-*/²%])/);

    let firstNumber = parseFloat(num1);
    let secondNumber = parseFloat(num2);

    switch (operator) {
        case '²':
            resultInput.value = `${Math.pow(firstNumber, 2)}`.slice(0, 9); 
            break;
        case '%':
            resultInput.value = `${firstNumber / 100}`.slice(0, 9); 
            break;
        case '/':
            if (secondNumber !== 0) {
                resultInput.value = `${firstNumber / secondNumber}`.slice(0, 11); 
            } else {
                resultInput.value = `Error`;
            }
            break;
        case '*':
            if (secondNumber === 0) {
                resultInput.value = '0';
            } else if (secondNumber === 1) {
                resultInput.value = `${firstNumber}`;
            } else {
                resultInput.value = `${firstNumber * secondNumber}`.slice(0, 9); 
            }
            break;
        case '-':
            resultInput.value = `${firstNumber - secondNumber}`.slice(0, 9); 
            break;
        case '+':
            if (firstNumber === 0) {
                resultInput.value = `${secondNumber}`;
            } else {
                resultInput.value = `${firstNumber + secondNumber}`.slice(0, 9); 
            }
            break;
        default:
            resultInput.value = 'NaN';
    }
}