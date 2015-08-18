//Problem 5
function randomArray(arrayLength) {
    var resultArray = [];
    for (var i = 0; i < arrayLength; i+=1) {
        resultArray[i] = precRound(getRandomInRange(-100, 100), 0);
    }
    return resultArray;
}
function selectionSort(inputArray) {
    var outputArray = [],
        minElement,
        minElementIndex;
    while (inputArray.length > 0) {
        minElement = inputArray[0],
        minElementIndex = 0;
        for (var i = 1; i < inputArray.length; i++) {
            if (inputArray[i] < minElement) {
                minElement = inputArray[i];
                minElementIndex = i;
            }
        }
        outputArray.push(minElement);
        inputArray.splice(minElementIndex, 1);
    }
    return outputArray;
}


var inputArray = randomArray(Math.random() * 30);
console.log('');
console.log('Problem 5 result:');
outputMessage = 'Input array: [' + inputArray.join(', ') + ']; Sorted array: [' + selectionSort(inputArray).join(', ') + '].';
document.getElementById('result5').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result5').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result5').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';