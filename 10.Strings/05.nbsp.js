//Problem 5

function nbspReplace(text) {
    return text.replace(/ /g, '&nbsp');
}

var text = 'We are living in a yellow submarine. We don\'t have anything else.';
console.log('');
console.log('Problem 5 result:');
outputMessage = 'Input text: "' + text + '"; ' + 'Output text: ' + nbspReplace(text);
document.getElementById('result5').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result5').innerHTML += '<br /><span class="explanation">Please, check the result in the console!</span>';