//Problem 1

function isOdd (number) {
    if (number % 2 === 0) {
        document.getElementById('result1').innerHTML += '<br />Number ' + number + ' is EVEN.';
        console.log('Number ' + number + ' is EVEN.');
    }
    else {
        document.getElementById('result1').innerHTML += '<br />Number ' + number + ' is ODD.';
        console.log('Number ' + number + ' is ODD.');
    }
}

var numberToTest;
console.log('');
console.log('Problem 1 result:');
for (i = 0; i < 10; i++) {
    numberToTest = (Math.random() * 100) | 0;
    isOdd(numberToTest);
}
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result1').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';