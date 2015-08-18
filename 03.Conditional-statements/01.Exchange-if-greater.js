//Problem 1

function exchangeIfGreater (numberA, numberB) {
    var temp;
    if (numberA > numberB) {
        temp = numberA;
        numberA = numberB;
        numberB = temp;
    }
    return numberA + ' ' + numberB;
}


var numberA, numberB, outputMessage;
console.log('');
console.log('Problem 1 result:');
for (var i = 0; i < 10; i++) {
    numberA = precRound(negativeRandom() * 10, 1);
    numberB = precRound(negativeRandom() * 10, 1);
    outputMessage = 'Inpit values: a = ' + numberA + ', b = ' + numberB + '; Result: ' + exchangeIfGreater(numberA, numberB);
    document.getElementById('result1').innerHTML += '<br />' + outputMessage;
    console.log(outputMessage);
}
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result1').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';