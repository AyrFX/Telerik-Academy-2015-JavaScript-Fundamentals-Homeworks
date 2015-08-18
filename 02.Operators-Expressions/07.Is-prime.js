//Problem 7

function isPrime (number) {
    if (number < 2) {
        document.getElementById('result7').innerHTML += '<br /> The number ' + number + ' IS NOT prime.';
        console.log('The number ' + number + ' IS NOT prime.');
        return;
    }
    for (var i = 1; i <= number; i++) {
        if (i != 1 && i != number && number % i === 0) {
            document.getElementById('result7').innerHTML += '<br /> The number ' + number + ' IS NOT prime.';
            console.log('The number ' + number + ' IS NOT prime.');
            return;
        }
    }
    document.getElementById('result7').innerHTML += '<br /> The number ' + number + ' IS prime.';
    console.log('The number ' + number + ' IS prime.');
}


var number;
console.log('');
console.log('Problem 7 result:');
for (var i = 0; i < 10; i++) {
    number = precRound(negativeRandom() * 100, 0);
    isPrime(number);
}
document.getElementById('result7').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result7').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';