let currentInput = ''; 
let ans = ''; 

function Button (value) {
    
    if (ans && currentInput === ans) {
        updateDisplay(ans + value);
        return;
    }

    if (value === '=') {
        if (currentInput !== '') {
            calculate();
        }
        return;
    }
    
    updateDisplay(currentInput + value);
}

function updateDisplay(value) {
    if (value === '') {
        document.getElementById('display').value = '0'; 
    } else {
        document.getElementById('display').value = value;
    }
    currentInput = value; 
}

function clearEntry() {
    updateDisplay('');
}

function backspace() {
    updateDisplay(currentInput.slice(0, -1)); 
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    
    
    displayValue = displayValue.replace('ans', ans);

    
    if (!isValidInput(displayValue)) {
        clearEntry();
        alert('Invalid input');
        return;
    }
    
    try {
        var result = eval(displayValue); 
        if (!isFinite(result)) {
            throw new Error('Invalid expression');
        }
        updateDisplay(result);
        ans = result; 
    } catch (error) {
        clearEntry();
        alert('Error: ' + error.message);
    }
}


function isValidInput(input) {
    
    if (/[\+\-\*\/]{2,}/.test(input)) {
        return false;
    }
    
    if (/[0-9]+\.[0-9]+\./.test(input)) {
        return false;
    }
   
    if (/^[\+\-\*\/]/.test(input)) {
        return false;
    }
    return true;
}
