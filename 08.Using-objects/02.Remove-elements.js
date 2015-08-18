//Problem 2

Array.prototype.remove = function(value) {
    for (var i = 0; i < this.length; i+=1) {
        if (this[i] === value) {
            this.splice(i, 1)
            i-=1;
        }
    }
}

var inputArray = randomArray(20, -5, 5, 0),
    element = precRound(getRandomInRange(-5, 5), 0);

console.log('');
console.log('Problem 2 result:');
outputMessage = 'Input array: [' + inputArray.join(', ') + ']; Element to remove: ' + element + '; Result Array: [';
inputArray.remove(element);
outputMessage += inputArray.join(', ') + '].';
document.getElementById('result2').innerHTML += '<br />' + outputMessage + '<br />';
console.log(outputMessage);
document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result2').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';