//Problem 6

function isInCircle (pointX, pointY, circleR) {
    var posX = Math.abs(pointX),
        posY = Math.abs(pointY);
    if (Math.pow(posX, 2) + Math.pow(posY, 2) < Math.pow(circleR, 2)) {
        document.getElementById('result6').innerHTML += '<br /> The point {' + precRound(pointX, 2) + ', ' + precRound(pointY, 2) + '} is WITHIN the circle ({0,0}, ' + precRound(circleR, 2) + ').';
        console.log('The point {' + precRound(pointX, 2) + ', ' + precRound(pointY, 2) + '} is within the circle ({0,0}, ' + precRound(circleR, 2) + ').');
    }
    else {
        document.getElementById('result6').innerHTML += '<br /> The point {' + precRound(pointX, 2) + ', ' + precRound(pointY, 2) + '} is OUTSIDE the circle ({0,0}, ' + precRound(circleR, 2) + ').';
        console.log('The point {' + precRound(pointX, 2) + ', ' + precRound(pointY, 2) + '} is outside the circle ({0,0}, ' + precRound(circleR, 2) + ').');
    }
}


var pointX, pointY, circleR;
console.log('');
console.log('Problem 6 result:');
for (var i = 0; i < 10; i++) {
    pointX = negativeRandom() * 100;
    pointY = negativeRandom() * 100;
    circleR = Math.random() * 100;
    isInCircle(pointX, pointY, circleR);
}
document.getElementById('result6').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result6').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';