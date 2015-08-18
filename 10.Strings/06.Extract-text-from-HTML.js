//Problem 6

function extractText(text) {
    var newTagStartIndex = 0,
        openTagStartIndex = 0,
        openTagEndIndex = 0,
        closeTagStartIndex = 0,
        closeTagEndIndex = 0,
        tagName,
        content,
        fullTagName,
        textLength = text.length;
    do {
        newTagStartIndex = text.indexOf('<');
        if (newTagStartIndex > -1) {
            openTagStartIndex = newTagStartIndex;
            openTagEndIndex = text.indexOf('>', openTagStartIndex) + 1;
            fullTagName = text.substring(openTagStartIndex, openTagEndIndex);
            text = text.replace(fullTagName, '');
        }
    } while (newTagStartIndex > -1);
    return text;
}

var text = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log('');
console.log('Problem 6 result:');
outputMessage = 'Extracted example text: "' + extractText(text) + '"';
document.getElementById('result6').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result6').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';