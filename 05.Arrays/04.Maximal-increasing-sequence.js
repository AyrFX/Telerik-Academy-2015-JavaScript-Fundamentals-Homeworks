//Problem 4

var inputArray = [3, 2, 3, 4, 2, 2, 4],
    seqLength = 0,
    seqFirstPos = 0,
    maxLength=0,
    maxFirstPos=0,
    resultArray,
    j;

for (var i = 0; i < inputArray.length; i+=1) {
    seqFirstPos = i;
    seqLength = 1;
    j = i;
    while (inputArray[j] + 1 === inputArray[j + 1]) {
        seqLength += 1;
        j += 1;
    }
    if (seqLength > maxLength) {
        maxLength = seqLength;
        maxFirstPos = seqFirstPos;
    }
}
resultArray = inputArray.slice(maxFirstPos, maxFirstPos + maxLength);

console.log('');
console.log('Problem 4 result:');
outputMessage = 'Input array: [' + inputArray.join(', ') + ']; Maximal increasing sequence: [' + resultArray.join(', ') + '].';
document.getElementById('result4').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result4').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result4').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';