function precRound(number, precision) {
    number *= Math.pow(10, precision);
    number += 0.5;
    number = number | 0;
    return number / Math.pow(10, precision);
}

function negativeRandom() {
    var sign = Math.random();
    if (sign < 0.5) {
        sign = -1;
    }
    else {
        sign = 1;
    }
    return Math.random() * sign;
}

function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function randomArray(arrayLength, min, max, prec) {
    var resultArray = [];
    for (var i = 0; i < arrayLength; i+=1) {
        resultArray[i] = precRound(getRandomInRange(min, max), prec);
    }
    return resultArray;
}