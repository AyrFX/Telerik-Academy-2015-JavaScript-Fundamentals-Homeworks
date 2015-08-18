//Problem 3

function rectangleArea (width, height) {
    var result = width * height;
    result = precRound(result, 2);
    document.getElementById('result3').innerHTML += '<br />The area of rectangle with width = ' + width + ' and height = ' + height + ' is ' + result;
    console.log('The area of rectangle with width = ' + width + ' and height = ' + height + ' is ' + result);
}


var width, height;
console.log('');
console.log('Problem 3 result:');
for (var i = 0; i < 10; i++) {
    width = precRound(Math.random() * 100, 2);
    height = precRound(Math.random() * 100, 2);
    rectangleArea(width, height);
}
document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result3').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';