//Problem 6

function randomArray(arrayLength) {
    var resultArray = [];
    for (var i = 0; i < arrayLength; i+=1) {
        resultArray[i] = precRound(getRandomInRange(-10, 10), 0);
    }
    return resultArray;
}

function checkIfBigger(inputArray, position) {
    if (position >= inputArray.length) {
        return -1;
    } else if (position === 0) {
        if (inputArray[position] > inputArray[position + 1]) {
            return 1;
        }
    } else if (position === inputArray.length - 1) {
        if (inputArray[position] > inputArray[position - 1]) {
            return 1;
        }
    } else if (inputArray[position] > inputArray[position - 1] && inputArray[position] > inputArray[position + 1]) {
        return 1;
    }
    return 0;
}


var inputArray = randomArray(40),
    positionToCheck = (Math.random() * 40) | 0;
console.log('');
console.log('Problem 6 result:');
switch (checkIfBigger(inputArray, positionToCheck)) {
    case -1:
        outputMessage = 'Given position exceeds the array size!';
        break;
    case 0:
        outputMessage = 'Input array: [' + inputArray.join(', ') + ']; The number at position ' + positionToCheck + ' isn\'t greater than its neighbour(s).';
        break;
    case 1:
        outputMessage = 'Input array: [' + inputArray.join(', ') + ']; The number at position ' + positionToCheck + ' is greater than its neighbour(s).';
        break;
}
document.getElementById('result6').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result6').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result6').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';