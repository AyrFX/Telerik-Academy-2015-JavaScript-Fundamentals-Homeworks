//Problem 8

function trapezoidArea (aBase, bBase, height) {
    var result = ((aBase + bBase) / 2) * height;
    document.getElementById('result8').innerHTML += '<br /> The area of trapezoid with sides a = ' + aBase + ', b = ' + bBase + ' and height h = ' + height + ' is ' + result;
    console.log('The area of trapezoid with sides a = ' + aBase + ', b = ' + bBase + ' and height h = ' + height + ' is ' + result);
}


var aBase, bBase, height;
console.log('');
console.log('Problem 8 result:');
for (var i = 0; i < 10; i++) {
    aBase = precRound(Math.random() * 100, 2);
    bBase = precRound(Math.random() * 100, 2);
    height = precRound(Math.random() * 100, 2);
    trapezoidArea(aBase, bBase, height);
}
document.getElementById('result8').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result8').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';