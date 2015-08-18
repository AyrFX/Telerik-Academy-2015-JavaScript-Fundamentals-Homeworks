//Problem 11

function stringFormat(text) {
    var reg,
        i;
    for(i = 0; i < arguments.length; i+=1) {
        reg = RegExp('[{]' + i + '[}]', 'g');
        text = text.replace(reg, arguments[i+1]);
    }
    return text;
}

var text = 'Sample text containing bool: {0}, number: {1}, string: {2} and array: {3}.';
console.log('');
console.log('Problem 11 result:');
outputMessage = 'Formatted text: ' + stringFormat(text, true, -5, 'some string', [3, 'four', false]) + ';';
document.getElementById('result11').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result11').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';