//Problem 9

function pointPosition (pointX, pointY) {
    var xDistance = Math.abs(1 - pointX),
        yDistance = Math.abs(1 - pointY),
        insideCircle = false,
        outsideRect = true;
    if (Math.pow(xDistance, 2) + Math.pow(yDistance, 2) < 9) {
        insideCircle = true;
    }
    else {
        insideCircle = false;
    }

    if ((pointX < -1) || (pointX > 5) || (pointY < -1) || (pointY > 1)) {
        outsideRect = true;
    }
    else {
        outsideRect = false;
    }
    if (insideCircle && outsideRect) {
        document.getElementById('result9').innerHTML += '<br /> The point (' + pointX + ', ' + pointY + ') IS inside K((1, 1), 3) and outside R(top=1, left=-1, width=6, height=2).';
        console.log(' The point (' + pointX + ', ' + pointY + ') IS inside K((1, 1), 3) and outside R(top=1, left=-1, width=6, height=2).');
    }
    else {
        document.getElementById('result9').innerHTML += '<br /> The point (' + pointX + ', ' + pointY + ') IS NOT inside K((1, 1), 3) and outside R(top=1, left=-1, width=6, height=2).';
        console.log(' The point (' + pointX + ', ' + pointY + ') IS NOT inside K((1, 1), 3) and outside R(top=1, left=-1, width=6, height=2).');
    }
}


var pointX, pointY;
console.log('');
console.log('Problem 9 result:');
for (var i = 0; i < 10; i++) {
    pointX = precRound(negativeRandom() * 5, 2);
    pointY = precRound(negativeRandom() * 5, 2);
    pointPosition(pointX, pointY);
}
document.getElementById('result9').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result9').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';