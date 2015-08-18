//Problem 2

function divisibleBy7and5 (number) {
    if (number % 7 === 0 && number % 5 === 0) {
        document.getElementById('result2').innerHTML += '<br />Number ' + number + ' IS divisable by 7 and 5.';
        console.log('Number ' + number + ' IS divisable by 7 and 5.');
    }
    else {
        document.getElementById('result2').innerHTML += '<br />Number ' + number + ' IS NOT divisable by 7 and 5.';
        console.log('Number ' + number + ' IS NOT divisable by 7 and 5.');
    }
}

var numberToTest;
console.log('');
console.log('Problem 2 result:');
for (var i = 0; i < 10; i++) {
    numberToTest = (Math.random() * 500) | 0;
    divisibleBy7and5(numberToTest);
}
document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result2').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';