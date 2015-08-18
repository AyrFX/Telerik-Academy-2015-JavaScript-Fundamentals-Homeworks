//Problem 2
function randomString(symbols) {
    var resultString = '';
    for (var i = 0; i < symbols; i+=1) {
        resultString += String.fromCharCode(getRandomInRange(97, 123));
    }
    return resultString;
}

var firstArray = randomString(Math.random() * 30).split(''),//using .split() converts a string in array of chars
    secondArray  = randomString(Math.random() * 30).split(''),
    result = ' = ';
for (i = 0; i < Math.min(firstArray.length, secondArray.length); i+=1) {
    if (firstArray[i] < secondArray[i]) {
        result = ' < ';
        break;
    }
    else if (firstArray[i] > secondArray[i]) {
        result = ' > ';
        break;
    }
}
if (result === ' = ') {
    if (firstArray.length < secondArray.length) {
        result = ' < ';
    }
    else {
        result = ' > ';
    }
}

console.log('');
console.log('Problem 2 result:');
outputMessage = 'First array: [' + firstArray.join(', ') + ']; Second array: [' + secondArray.join(', ') + ']; First array' + result + 'Second array.';
document.getElementById('result2').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result2').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';