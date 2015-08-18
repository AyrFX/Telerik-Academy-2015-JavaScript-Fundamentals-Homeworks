//Problem 5

function randomArray(arrayLength) {
    var resultArray = [];
    for (var i = 0; i < arrayLength; i+=1) {
        resultArray[i] = precRound(getRandomInRange(-10, 10), 0);
    }
    return resultArray;
}

function occurrencesCount(inputArray, numberForSearch) {
    var counter = 0;
    for (i = 0; i < inputArray.length; i+=1) {
        if (inputArray[i] === numberForSearch) {
            counter += 1;
        }
    }
    return counter;
}

function test(inputArray, numberForSearch) {
    return 'Input array: [' + inputArray.join(', ') + ']; Appearance of number ' + numberForSearch + ': ' + occurrencesCount(inputArray, numberForSearch);
}


var inputArray = randomArray(40),
    numberForSearch = getRandomInRange(-10, 10) | 0;
console.log('');
console.log('Problem 5 result:');
outputMessage = test(inputArray, numberForSearch);
document.getElementById('result5').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result5').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result5').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';