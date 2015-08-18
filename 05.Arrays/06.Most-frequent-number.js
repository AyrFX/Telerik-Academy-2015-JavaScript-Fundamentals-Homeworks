//Problem 6
function randomArray(arrayLength) {
    var resultArray = [];
    for (var i = 0; i < arrayLength; i+=1) {
        resultArray[i] = precRound(getRandomInRange(-10, 10), 0);
    }
    return resultArray;
}

function mostFrequent(inputArray) {
    var tempArray = [],
        maxCount = 0,
        maxNumber = 0;
    for(var i = 0; i < inputArray.length; i += 1) {
        if (tempArray[inputArray[i]] === undefined) {
            tempArray[inputArray[i]] = 1;
        }
        else {
            tempArray[inputArray[i]] += 1;
        }
    }
    for (var i = 0; i < tempArray.length; i += 1) {
        if (tempArray[i] === undefined) {
            continue;
        }
        else {
            if (maxCount < tempArray[i]) {
                maxCount = tempArray[i];
                maxNumber = i;
            }
        }
    }
    return  maxNumber + ' (' + maxCount + ' times)';
}


var inputArray = randomArray(Math.random() * 30);
console.log('');
console.log('Problem 6 result:');
outputMessage = 'Input array: [' + inputArray.join(', ') + ']; Most frequent number: ' + mostFrequent(inputArray);
document.getElementById('result6').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result6').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result6').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';