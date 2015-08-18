//Problem 2

function getSign (numberA, numberB, numberC) {
    var abSign;
    if ((numberA === 0) || (numberB === 0) || (numberC === 0)) {
        return 0;
    }
    if (((numberA > 0) && (numberB < 0)) || ((numberA < 0) && (numberB > 0))) {
        abSign = false;
    }
    else {
        abSign = true;
    }
    if (((numberC > 0) && (abSign === true)) || ((numberC < 0) && (abSign === false))) {
        return '+';
    }
    else {
        return '-';
    }
}


var numberA, numberB, numberC, outputMessage;
console.log('');
console.log('Problem 2 result:');
for (var i = 0; i < 10; i++) {
    numberA = precRound(negativeRandom() * 10, 1);
    numberB = precRound(negativeRandom() * 10, 1);
    numberC = precRound(negativeRandom() * 10, 1);
    outputMessage = 'Inpit values: a = ' + numberA + ', b = ' + numberB + ', c = ' + numberC + '; Result: ' + getSign(numberA, numberB, numberC);
    document.getElementById('result2').innerHTML += '<br />' + outputMessage;
    console.log(outputMessage);
}
document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result2').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';