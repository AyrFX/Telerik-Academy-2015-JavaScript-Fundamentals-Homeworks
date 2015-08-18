//Problem 6

function qRoots (coeffA, coeffB, coeffC) {
    var D = Math.pow(coeffB, 2) - (4 * coeffA * coeffC);
    if (D < 0) {
        return 'no real roots';
    }
    else if (D === 0) {
        return 'x1 = x2 = ' + precRound((coeffB / (2 * coeffA)) * -1, 2);
    }
    else {
        return 'x1 = ' + precRound(((coeffB * -1) + Math.sqrt(D)) / (2 * coeffA), 2) + '; x2 = ' + precRound(((coeffB * -1) - Math.sqrt(D)) / (2 * coeffA), 2);
    }
}


var coeffA, coeffB, coeffC, outputMesage;
console.log('');
console.log('Problem 6 result:');
for (var i = 0; i < 10; i++) {
    coeffA = precRound(negativeRandom() * 10, 1);
    coeffB = precRound(negativeRandom() * 10, 1);
    coeffC = precRound(negativeRandom() * 10, 1);
    outputMesage = 'Inpit values: a = ' + coeffA + ', b = ' + coeffB + ', c = ' + coeffC + '; Result: ' + qRoots(coeffA, coeffB, coeffC);
    document.getElementById('result6').innerHTML += '<br />' + outputMesage;
    console.log(outputMesage);
}
document.getElementById('result6').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result6').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';