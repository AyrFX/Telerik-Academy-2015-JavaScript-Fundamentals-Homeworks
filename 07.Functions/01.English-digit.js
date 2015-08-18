//Problem 1

function lastDigitAsWord(inputNumber) {
    inputNumber %= 10;
    switch (inputNumber) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        default:
            return 'Not a digit';
    }
}


var inputNumber = Math.random() * 100000 | 0;
console.log('');
console.log('Problem 1 result:');
outputMessage = 'Given integer: ' + inputNumber + '; LastDigit as word: ' + lastDigitAsWord(inputNumber);
document.getElementById('result1').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result1').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';