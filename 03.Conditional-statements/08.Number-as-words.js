//Problem 8

function oneDigitAsWord (digit) {
    if (digit.length > 1) {
        return 'not a digit'
    }
    switch (digit) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'not a digit';
    }
}

function twoDigitsAsWords (number) {
    switch (number) {
        case 10: return 'ten';
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 13: return 'thirteen';
        case 20: return 'twenty';
        case 30: return 'thirty';
        case 50: return 'fifty';
        case 80: return 'eighty';
        default: {
            if (number < 20) {
                return oneDigitAsWord(number % 10) + 'teen';
            }
            else if (number < 30) {
                return 'twenty ' + oneDigitAsWord(number % 10);
            }
            else if (number < 40) {
                return 'thirty ' + oneDigitAsWord(number % 10);
            }
            else if (number < 60 && number > 49) {
                return 'fifty ' + oneDigitAsWord(number % 10);
            }
            else if (number < 90 && number > 79) {
                return 'eighty ' + oneDigitAsWord(number % 10);
            }
            else {
                var fDigit = (number / 10) | 0,
                    sDigit = number % 10;
                if (sDigit === 0) {
                    return oneDigitAsWord(fDigit) + 'ty';
                }
                else {
                    return oneDigitAsWord(fDigit) + 'ty ' + oneDigitAsWord(sDigit);
                }

            }
        }
    }
}

function threeDigitAsWord (number) {
    if (number % 100 === 0) {
        return oneDigitAsWord((number / 100) | 0) + ' hundred.'
    }
    else {
        if (parseInt(number % 100) < 10) {
            return oneDigitAsWord((number / 100) | 0) + ' hundred and ' + oneDigitAsWord(number % 100);
        }
        else {
            return oneDigitAsWord((number / 100) | 0) + ' hundred and ' + twoDigitsAsWords(number % 100);
        }
    }
}

function numberAsWords(number) {
    var result;
    if (number < 10) {
        result = oneDigitAsWord(number);
    }
    else if (number < 100) {
        result = twoDigitsAsWords(number);
    }
    else if (number < 1000) {
        result = threeDigitAsWord(number);
    }
    else {
        return 'not a 3-digit number';
    }
    return result.charAt(0).toUpperCase() + result.slice(1);
}


var number, outputMesage;
console.log('');
console.log('Problem 8 result:');
for (var i = 0; i < 10; i++) {
    number = precRound(Math.random() * 1000, 0);
    outputMesage = 'Inpit value: ' + number + '; Result: ' + numberAsWords(number);
    document.getElementById('result8').innerHTML += '<br />' + outputMesage;
    console.log(outputMesage);
}
document.getElementById('result8').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result8').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';