//Problem 3

function getBiggest (numberA, numberB, numberC) {
    if (numberA > numberB) {
        if (numberA > numberC) {
            return numberA;
        }
        else {
            return numberC;
        }
    }
    else {
        if (numberB > numberC) {
            return numberB;
        }
        else {
            return numberC;
        }
    }
}


var numberA, numberB, numberC, outputMesage;
console.log('');
console.log('Problem 3 result:');
for (var i = 0; i < 10; i++) {
    numberA = precRound(negativeRandom() * 10, 1);
    numberB = precRound(negativeRandom() * 10, 1);
    numberC = precRound(negativeRandom() * 10, 1);
    outputMesage = 'Inpit values: a = ' + numberA + ', b = ' + numberB + ', c = ' + numberC + '; Result: ' + getBiggest(numberA, numberB, numberC);
    document.getElementById('result3').innerHTML += '<br />' + outputMesage;
    console.log(outputMesage);
}
document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result3').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';