//Problem 1

function reverseString(input) {
    return input.split('').reverse().join('');
}


var inputString = 'abcdefghijklmnopqrstuvwxyz';
console.log('');
console.log('Problem 1 result:');
outputMessage = 'Given string: ' + inputString + '; Reversed string: ' + reverseString(inputString);
document.getElementById('result1').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';