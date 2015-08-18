//Problem 4

function parseTags(text) {
    var newTagStartIndex = 0,
        openTagStartIndex = 0,
        openTagEndIndex = 0,
        closeTagStartIndex = 0,
        closeTagEndIndex = 0,
        tagName,
        content,
        fullTagName,
        i,
        textLength = text.length,
        parsedText;
    while(newTagStartIndex > -1 && newTagStartIndex < textLength) {
        newTagStartIndex = text.indexOf('<', Math.max(openTagStartIndex, closeTagEndIndex));
        if (newTagStartIndex > -1) {
            openTagStartIndex = newTagStartIndex;
            openTagEndIndex = text.indexOf('>', openTagStartIndex + 1);
            tagName = text.substring(openTagStartIndex + 1, openTagEndIndex);
            closeTagStartIndex = text.indexOf('</'+tagName + '>', openTagEndIndex);
            closeTagEndIndex = closeTagStartIndex + tagName.length + 3;
            content = text.substring(openTagEndIndex + 1, closeTagStartIndex);
            openTagStartIndex = openTagEndIndex + 1;
            fullTagName = '<' + tagName + '>';
            text = text.replace(fullTagName, fullTagName.toLowerCase());
            fullTagName = '</' + tagName + '>';
            text = text.replace(fullTagName, fullTagName.toLowerCase());
        }
    }
    newTagStartIndex = 0;
    openTagStartIndex = 0;
    openTagEndIndex = 0;
    closeTagStartIndex = 0;
    closeTagEndIndex = 0;
    parsedText = text.substring(0, text.indexOf('<', openTagStartIndex));
    while(newTagStartIndex > -1 && newTagStartIndex < textLength) {
        newTagStartIndex = text.indexOf('<', Math.max(openTagStartIndex, closeTagEndIndex));
        if (newTagStartIndex > -1) {
            openTagStartIndex = newTagStartIndex;
            if (openTagStartIndex !== 0 && closeTagEndIndex !== 0 && closeTagEndIndex < openTagStartIndex) {
                parsedText += text.substring(closeTagEndIndex, openTagStartIndex);
            }
            openTagEndIndex = text.indexOf('>', openTagStartIndex + 1);
            tagName = text.substring(openTagStartIndex + 1, openTagEndIndex).toLowerCase();
            closeTagStartIndex = text.indexOf('</'+tagName + '>', openTagEndIndex);
            closeTagEndIndex = closeTagStartIndex + tagName.length + 3;
            content = text.substring(openTagEndIndex + 1, closeTagStartIndex);
            openTagStartIndex = openTagEndIndex + 1;
            switch (tagName) {
                case 'upcase':
                    content = content.toUpperCase();
                    if (content.indexOf('<') > -1) {
                        content = parseTags(content);
                    }
                    parsedText += content;
                    break;
                case 'lowcase':
                    content += content.toLowerCase();
                    if (content.indexOf('<') > -1) {
                        content = parseTags(content);
                    }
                    parsedText += content;
                    break;
                case 'mixcase':
                    var mixed = '';
                    for (i = 0; i < content.length; i += 1)
                    {
                        if (!!Math.round(Math.random())) {
                            mixed += content.charAt(i).toUpperCase();
                        } else {
                            mixed += content.charAt(i).toLowerCase();
                        }
                    }
                    if (content.indexOf('<') > -1) {
                        mixed = parseTags(mixed);
                    }
                    parsedText += mixed;
                    break;
                default :
                    parsedText += content;
            }
        } else {
            parsedText += text.substring(closeTagEndIndex);
        }
    }
    return parsedText;
}

    var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
console.log('');
console.log('Problem 4 result:');
outputMessage = 'Parsed example text: "' + parseTags(text) + '"';
document.getElementById('result4').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result4').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';