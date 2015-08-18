//Problem 3

var inputArray = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
    seqLength = 0,
    seqFirstPos = 0,
    maxLength=0,
    maxFirstPos=0,
    resultArray;

for (var i = 0; i < inputArray.length; i+=1) {
    seqFirstPos = i;
    seqLength = 1;
    for (var j = i+1; j < inputArray.length; j+=1) {
        if (inputArray[i] === inputArray[j]) {
            seqLength += 1;
        }
        else break;
    }
    if (seqLength > maxLength) {
        maxLength = seqLength;
        maxFirstPos = seqFirstPos;
    }
}
resultArray = inputArray.slice(maxFirstPos, maxFirstPos + maxLength);

console.log('');
console.log('Problem 3 result:');
outputMessage = 'Input array: [' + inputArray.join(', ') + ']; Maximal sequence: [' + resultArray.join(', ') + '].';
document.getElementById('result3').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result3').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';