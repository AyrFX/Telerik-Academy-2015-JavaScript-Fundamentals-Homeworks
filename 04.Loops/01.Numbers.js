//Problem 1

function sequence(toNumber) {
    var result = '';
    for (var i = 1; i <= toNumber; i++) {
        if (i !== 1) {
            result += ', ' + i.toString();
        }
        else {
            result += i.toString();
        }
    }
    return result;
}


var toNumber, outputMessage;
console.log('');
console.log('Problem 1 result:');
for (var i = 0; i < 10; i++) {
    toNumber = precRound(Math.random() * 100, 0);
    outputMessage = 'Numbers to ' + toNumber + ': ' + sequence(toNumber);
    document.getElementById('result1').innerHTML += '<br />' + outputMessage;
    console.log(outputMessage);
}
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result1').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';