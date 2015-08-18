//Problem 1

function buildRandomPoint() {
    return {
        x: precRound(getRandomInRange(-100, 100), 2),
        y: precRound(getRandomInRange(-100, 100), 2)
    }
}

function buildRandomLine() {
    return {
        pointA: buildRandomPoint(),
        pointB: buildRandomPoint()
    }
}

function findDistance(pointA, pointB) {
    var restult;
    result = Math.pow(Math.abs(pointA.x - pointB.x), 2) + Math.pow(Math.abs(pointA.y - pointB.y), 2);
    result = Math.sqrt(result);
    return precRound(result, 2);
}

function canFormTriangle(lineA, lineB, lineC) {
    var widthA = findDistance(lineA.pointA, lineA.pointB),
        widthB = findDistance(lineB.pointA, lineB.pointB),
        widthC = findDistance(lineC.pointA, lineC.pointB);
        if ((widthA > widthB + widthC) || (widthB > widthA + widthC) || (widthC > widthA + widthB)) {
            return false;
        }
        return true;
}



var pointA = buildRandomPoint(),
    pointB = buildRandomPoint(),
    lineA = buildRandomLine(),
    lineB = buildRandomLine(),
    lineC = buildRandomLine();
console.log('');
console.log('Problem 1 result:');
outputMessage = 'The distance between point A(' + pointA.x + ', ' + pointA.y + ') and point B(' + pointB.x + ', ' + pointB.y + ') is ' + findDistance(pointA, pointB);
document.getElementById('result1').innerHTML += '<br />' + outputMessage + '<br />';
console.log(outputMessage);

outputMessage = 'The width of line A = ' + findDistance(lineA.pointA, lineA.pointB) + '; The width of line B = ' + findDistance(lineB.pointA, lineB.pointB) + '; The width of line C = ' + findDistance(lineC.pointA, lineC.pointB);
document.getElementById('result1').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

if (canFormTriangle(lineA, lineB, lineC)) {
    outputMessage = 'Line A((P1' + lineA.pointA.x + ', ' + lineA.pointA.y + '), P2(' + lineA.pointB.x + ', ' + lineA.pointB.y + ')), ';
    outputMessage += 'Line B((P1' + lineB.pointA.x + ', ' + lineB.pointA.y + '), P2(' + lineB.pointB.x + ', ' + lineB.pointB.y + ')), and ';
    outputMessage += 'Line C((P1' + lineC.pointA.x + ', ' + lineC.pointA.y + '), P2(' + lineC.pointB.x + ', ' + lineC.pointB.y + ')), can form a triangle.';
} else {
    outputMessage = 'Line A((P1' + lineA.pointA.x + ', ' + lineA.pointA.y + '), P2(' + lineA.pointB.x + ', ' + lineA.pointB.y + ')), ';
    outputMessage += 'Line B((P1' + lineB.pointA.x + ', ' + lineB.pointA.y + '), P2(' + lineB.pointB.x + ', ' + lineB.pointB.y + ')), and ';
    outputMessage += 'Line C((P1' + lineC.pointA.x + ', ' + lineC.pointA.y + '), P2(' + lineC.pointB.x + ', ' + lineC.pointB.y + ')), can\'t form a triangle.';
}
document.getElementById('result1').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result1').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';