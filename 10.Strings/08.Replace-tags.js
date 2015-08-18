//Problem 8

function replaceTags(text) {
    text = text.replace(/<\/a>/g, '[/URL]');
    text = text.replace(/<a href="/g, '[URL=');
    return text.replace(/\">/g, ']');
}

var text = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
console.log('');
console.log('Problem 8 result:');
outputMessage = 'Example text with replaced a-tags: ' + replaceTags(text);
document.getElementById('result8').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result8').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';