//Problem 7
function binarySearch(inputArray, searchFor) {
    var middle,
        partBegin = 0,
        partEnd = inputArray.length - 1;
    inputArray.sort();
    while ((middle !== partBegin) && (middle !== partEnd)) {
        middle = ((Math.abs(partEnd - partBegin) / 2) | 0) + partBegin;
        if (searchFor === inputArray[middle]) {
           return middle;
        }
        if (searchFor < inputArray[middle]) {
            partEnd = middle - 1;
        }
        else {
            partBegin = middle + 1;
        }
    }
    return -1;
}


var inputArray =  [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    searchFor = precRound(getRandomInRange(-5, 15), 0);
console.log('');
console.log('Problem 7 result:');
outputMessage = 'Input array: [' + inputArray.join(', ') + ']; Given element: ' + searchFor + '; Index of given element: ' + binarySearch(inputArray, searchFor);
document.getElementById('result7').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result7').innerHTML += '<br /><span class="explanation">If the element is not fount in the array, the index of given element is -1.</span>';
document.getElementById('result7').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result7').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';