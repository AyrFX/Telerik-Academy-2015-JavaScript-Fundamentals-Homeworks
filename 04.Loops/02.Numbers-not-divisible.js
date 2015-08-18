//Problem 2
function sequence(toNumber) {
    var result = '';
    for (var i = 1; i <= toNumber; i++) {
        if ((i % 3 !== 0) || (i % 7 !== 0)) {
            if (result !== '') {

                result += ', ' + i.toString();
            }
            else {
                result += i.toString();
            }
        }
    }
    return result;
}


var toNumber, outputMessage;
console.log('');
console.log('Problem 2 result:');
for (var i = 0; i < 10; i++) {
    toNumber = precRound(Math.random() * 100, 0);
    outputMessage = 'Numbers to ' + toNumber + ' that are not divisible by 3 and 7 at the same time: ' + sequence(toNumber);
    document.getElementById('result2').innerHTML += '<br />' + outputMessage;
    console.log(outputMessage);
}
document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result2').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';