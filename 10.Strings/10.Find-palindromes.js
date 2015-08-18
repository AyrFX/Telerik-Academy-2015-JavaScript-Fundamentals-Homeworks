//Problem 10

function extractPals(text) {
    var i;
    text = text.replace(/\.|\,|\;|\!|\?|\-|\"|\'|\(|\)|\[|\]|\{|\]/g, '');
    text = text.split(' ');
    for (i = text.length - 1; i >= 0; i-=1) {
        if (text[i] !== text[i].split('').reverse().join('')) {
            text.splice(i, 1);
        }
    }
    return text;
}

var text = 'Lorem ipsum dolor sit amet, madam consectetur adipiscing elit. In kayak finibus level sed magna ut refer auctor. In auctor ornare devoved ante civic hendrerit rhoncus evitative. Phasellus.',
    pals = extractPals(text);
console.log('');
console.log('Problem 10 result:');
outputMessage = 'Example text : ' + text + ';';
document.getElementById('result10').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
outputMessage = 'Palindromes: ' + pals.join(', ');
document.getElementById('result10').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result10').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';