//Problem 2

function bracketsCorrect(expression) {
    var left = 0,
        right = 0,
        i;
    for (var i = 0; i < expression.length; i+=1) {
        if (expression[i] === '(') {
            left += 1;
        } else if (expression[i] === ')') {
            right += 1;
        }
        if(left < right) {
            return false;
        }
    }
    if (left !== right) {
        return false;
    } else {
        return true;
    }
}

var expression = '((a+b)/5-d)';
console.log('');
console.log('Problem 2 result:');
if (bracketsCorrect(expression)) {
    outputMessage = 'In the expression: "' + expression + '" brackets ARE put correctly.';
} else {
    outputMessage = 'In the expression: "' + expression + '" brackets ARE NOT put correctly.';
}
document.getElementById('result2').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

var expression = ')(a+b))';
if (bracketsCorrect(expression)) {
    outputMessage = 'In the expression: "' + expression + '" brackets ARE put correctly.';
} else {
    outputMessage = 'In the expression: "' + expression + '" brackets ARE NOT put correctly.';
}
document.getElementById('result2').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';