//Problem 5

function digitAsWord (digit) {
    if (digit.length > 1) {
        return 'not a digit'
    }
    switch (digit) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'not a digit';
    }
}


var digit, outputMesage;
console.log('');
console.log('Problem 5 result:');
digit = 2;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = 1;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = 0;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = 2;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = 5;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = -0.1;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = 'hi';
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = 9;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
digit = 10;
outputMesage = 'Inpit value: ' + digit + '; Result: ' + digitAsWord(digit);
document.getElementById('result5').innerHTML += '<br />' + outputMesage;
console.log(outputMesage);
document.getElementById('result5').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';