//Problem 5

function thirdBit (number) {
    var result = ((1 << 3) & number) >> 3;
    document.getElementById('result5').innerHTML += '<br />' + number + ' has binary representation of ' + number.toString(2) + '. It\'s third bit is ' + result;
    console.log(number + ' has binary representation of ' + number.toString(2) + '. It\'s third bit is ' + result);
}

var number;
console.log('');
console.log('Problem 5 result:');
for (var i = 0; i < 10; i++) {
    number = Math.random() * 100000;
    number = number | 0;
    thirdBit(number);
}
document.getElementById('result5').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result5').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';