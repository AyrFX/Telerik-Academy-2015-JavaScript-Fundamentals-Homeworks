//Problem 4

function sort (numberA, numberB, numberC) {
    if (numberA > numberB) {
        if (numberB > numberC) {
            return numberA + ' ' + numberB + ' ' + numberC;
        }
        else {
            if (numberC > numberA) {
                return numberC + ' ' + numberA + ' ' + numberB;
            }
            else {
                return numberA + ' ' + numberC + ' ' + numberB;
            }
        }

    }
    else {
        if (numberA > numberC) {
            return numberB + ' ' + numberA + ' ' + numberC;
        }
        else {
            if (numberC > numberB) {
                return numberC + ' ' + numberB + ' ' + numberA;
            }
            else {
                return numberB + ' ' + numberC + ' ' + numberA;
            }
        }
    }
}


var numberA, numberB, numberC, outputMesage;
console.log('');
console.log('Problem 4 result:');
for (var i = 0; i < 10; i++) {
    numberA = precRound(negativeRandom() * 10, 1);
    numberB = precRound(negativeRandom() * 10, 1);
    numberC = precRound(negativeRandom() * 10, 1);
    outputMesage = 'Inpit values: a = ' + numberA + ', b = ' + numberB + ', c = ' + numberC + '; Result: ' + sort(numberA, numberB, numberC);
    document.getElementById('result4').innerHTML += '<br />' + outputMesage;
    console.log(outputMesage);
}
document.getElementById('result4').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result4').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';