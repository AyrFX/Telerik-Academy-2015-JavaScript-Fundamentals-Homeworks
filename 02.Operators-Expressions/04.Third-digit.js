//Problem 4

function isThirdDigitZero (number) {
    if (number < 100) {
        document.getElementById('result4').innerHTML += '<br />The third digit of ' + number + ' IS NOT 7.';
        console.log('The third digit of ' + number + ' IS NOT 7.');
        return;
    }
    var temp = number / 100;
    temp = temp | 0;
    if (temp % 10 === 7) {
        document.getElementById('result4').innerHTML += '<br />The third digit of ' + number + ' IS 7.';
        console.log('The third digit of ' + number + ' IS 7.');
    }
    else {
        document.getElementById('result4').innerHTML += '<br />The third digit of ' + number + ' IS NOT 7.';
        console.log('The third digit of ' + number + ' IS NOT 7.');
    }
}

var number;
console.log('');
console.log('Problem 4 result:');
for (var i = 0; i < 10; i++) {
    number = Math.random() * 10000000;
    number = number | 0;
    isThirdDigitZero(number);
}
document.getElementById('result4').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result4').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';