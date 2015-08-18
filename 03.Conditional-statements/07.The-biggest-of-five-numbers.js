//Problem 7

function getBiggestOfFive (numberA, numberB, numberC, numberD, numberE) {
    if (numberA >= numberB) {
        if (numberA >= numberC) {
            if (numberA >= numberD) {
                if (numberA >= numberE) {
                    return numberA;
                }
            }
        }
    }
    if (numberB >= numberA) {
        if (numberB >= numberC) {
            if (numberB >= numberD) {
                if (numberB >= numberE) {
                    return numberB;
                }
            }
        }
    }
    if (numberC >= numberA) {
        if (numberC >= numberB) {
            if (numberC >= numberD) {
                if (numberC >= numberE) {
                    return numberC;
                }
            }
        }
    }
    if (numberD >= numberA) {
        if (numberD >= numberB) {
            if (numberD >= numberC) {
                if (numberD >= numberE) {
                    return numberD;
                }
            }
        }
    }
    if (numberE >= numberA) {
        if (numberE >= numberB) {
            if (numberE >= numberC) {
                if (numberE >= numberD) {
                    return numberE;
                }
            }
        }
    }
}


var numberA, numberB, numberC, numberD, numberE, outputMesage;
console.log('');
console.log('Problem 7 result:');
for (var i = 0; i < 10; i++) {
    numberA = precRound(negativeRandom() * 10, 1);
    numberB = precRound(negativeRandom() * 10, 1);
    numberC = precRound(negativeRandom() * 10, 1);
    numberD = precRound(negativeRandom() * 10, 1);
    numberE = precRound(negativeRandom() * 10, 1);
    outputMesage = 'Inpit values: a = ' + numberA + ', b = ' + numberB + ', c = ' + numberC + ', d = ' + numberD + ', e = ' + numberE + '; Result: ' + getBiggestOfFive(numberA, numberB, numberC, numberD, numberE);
    document.getElementById('result7').innerHTML += '<br />' + outputMesage;
    console.log(outputMesage);
}
document.getElementById('result7').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result7').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';