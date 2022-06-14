
//calculator
var totalValue = document.getElementById("mycalculator");
var firstInput = '';
var action = '';



//replace string
function numbersAdd(input) {
    var numbersOnly = /[a-z]/g;
    input.value = input.value.replace(numbersOnly, '');
}

function insert(value) {
    if (action && totalValue.value == action) {
        totalValue.value = value;
        // totalValue.value += value;
        

    } else {
        if (value === '+' || value === '-' || value === '*' || value === '/') {
            firstInput = totalValue.value;
            totalValue.value = value;
            action = value;
           
        } else {
            totalValue.value += value;
            document.getElementById("error").innerHTML = ' ';
        }
    }
}

//string not allowed
//0 divide 

function exe() {
    if (action === '+') {
        const result = parseFloat(firstInput) + parseFloat(totalValue.value);
        totalValue.value = result;
    }
    else if (action === '-') {
        const result = parseFloat(firstInput) - parseFloat(totalValue.value);
        totalValue.value = result;
    }
    else if (action === '*') {
        const result = parseFloat(firstInput) * parseFloat(totalValue.value);
        totalValue.value = result;
    }
    else if (action === '/') {
        
        if (totalValue.value <= 0) {
            document.getElementById("error").innerHTML = 'Not Working';
        }else {
        const result = parseFloat(firstInput) / parseFloat(totalValue.value);
        totalValue.value = result;
        
    }
    }
}




function cancel() {
    totalValue.value = "";
}

