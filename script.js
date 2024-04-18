function appendNumberToActiveInput(number) {
    if(number === 'c') {
        location.reload(); 
        return; 
    }

    let operationInput = document.getElementById('operation');
    operationInput.style.display = 'inline';
    if (operationInput.value === "0") {
        operationInput.value = number;
    } else {
        operationInput.value += number;
    }
}

function calculate() {
    let operationInput = document.getElementById('operation');
    let resultInput = document.getElementById('result');
    let errortInput = document.getElementById('error');
    let operation = operationInput.value;

    let [num1, operator, num2] = operation.split(/([+\-*/x²%])/);

    let firstNumber = parseFloat(num1);
    let secondNumber = parseFloat(num2);

    if (firstNumber < 0) {
        errortInput.style.display  = 'inline';
        errortInput.value = 'Please enter a numbereee';
        return;
    }

    switch (operator) {
        case '+':
            resultInput.value = `${firstNumber + (secondNumber || 0)}`;
            break;
        case '-':
            resultInput.value = `${firstNumber - (secondNumber || 0)}`;
            break;
        case '*':
            if (secondNumber === 0) {
                resultInput.value = '0';
            } else if (secondNumber === 1) {
                resultInput.value = `${firstNumber}`;
            } else {
                resultInput.value = `${firstNumber * secondNumber}`;
            }
            break;
        case '/':
            if (secondNumber !== 0) {
                resultInput.value = `${firstNumber / (secondNumber || 1)}`;
            } else {
                errortInput.style.display  = 'inline';
                errortInput.value = `One of the numbers is 0. Cannot divide by 0`;
            }
            break;
        case 'x':
            resultInput.value = `${Math.pow(firstNumber, 2)}`;
            break;
        case '%':
            if (secondNumber) {
                resultInput.value = `${firstNumber * (secondNumber / 100)}`;
            } else {
                resultInput.value = `${firstNumber / 100}`;
            }
            break;
        default:
            resultInput.value = 'NaN';
    }
}

