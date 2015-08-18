//Problem 2

function reverseNumber(input) {
    input = '' + input;
    return input.split('').reverse().join('');
}


var inputNumber = precRound(Math.random() * 1000, 3);
console.log('');
console.log('Problem 2 result:');
outputMessage = 'Given number: ' + inputNumber + '; Reversed number: ' + reverseNumber(inputNumber);
document.getElementById('result2').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result2').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';