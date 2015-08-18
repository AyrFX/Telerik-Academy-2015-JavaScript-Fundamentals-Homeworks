//Problem 7

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

function getFirstLarger(inputArray) {
    var i;
    for (i = 0; i < inputArray.length; i+=1) {
        if (checkIfBigger(inputArray, i) === -1) {
            return -1;
        } else if (checkIfBigger(inputArray, i) === 1) {
            return i;
        }
    }
    return -1;
}


var inputArray = randomArray(40),
    position = getFirstLarger(inputArray);
console.log('');
console.log('Problem 6 result:');
switch (position) {
    case -1:
        outputMessage = 'There is no number larger than its neighbour(s) in array [' + inputArray.join(', ') + '.';
        break;
    default:
        outputMessage = 'The first number greater than it\'s neightbour(s) in array: [' + inputArray.join(', ') + '] is at index ' + position + '.';
        break;
}
document.getElementById('result7').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result7').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result7').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';