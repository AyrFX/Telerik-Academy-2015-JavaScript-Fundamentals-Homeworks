//Problem 3
function getMinAndMax(sequence) {
    var min = 100, max = -100;
    var numbers = sequence.split(', ');
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = parseFloat(numbers[i]);
    }
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return 'Min = ' + min + ', Max = ' + max;
}

function buildSequence (length) {
    var result = '';
    for (var i = 1; i <= length; i++) {
        if (result !== '') {

            result += ', ' + precRound(negativeRandom() * 100, 2);
        }
        else {
            result += precRound(negativeRandom() * 100, 2);
        }
    }
    return result;
}


var length, sequence, outputMessage;
console.log('');
console.log('Problem 3 result:');
for (var i = 0; i < 10; i++) {
    length = precRound(Math.random() * 30, 0);
    sequence = buildSequence(length);
    outputMessage = 'Input sequence: ' + sequence + '; Result: ' + getMinAndMax(sequence);
    document.getElementById('result3').innerHTML += '<br />' + outputMessage;
    console.log(outputMessage);
}
document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result3').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';