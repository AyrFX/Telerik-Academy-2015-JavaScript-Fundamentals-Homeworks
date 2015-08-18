//Problem 2

String.prototype.bind = function(options) {
	var prop,
	regex,
	result = this,
	matches,
	i;
	for (prop in options) {
		regex = RegExp('data-bind-content="' + prop + '"', 'gi');
		if (result.search(regex) > -1) {
			result = result.replace(/><\//, '>' + options[prop] + '</');
		}
		regex = RegExp('data-bind-href="' + prop + '"', 'gi');
		if (result.search(regex) > -1) {
			matches = result.match(/<a [A-z-=" ]+/gi);
			for (i = 0; i < matches.length; i += 1) {
			result = result.replace(/<a [A-z-=" ]+/gi, matches[i] + ' href=' + options[prop]);
			}
		}
		regex = RegExp('data-bind-class="' + prop + '"', 'gi');
		if (result.search(regex) > -1) {
			matches = result.match(/<a [A-z-=" ]+/gi);
			for (i = 0; i < matches.length; i += 1) {
			result = result.replace(/<a [A-z-=" ]+/gi, matches[i] + ' class=' + options[prop]);
			}
		}
	}
	return result;
};

var text = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>',
	options = {
		name: 'Elena',
		link: 'http://telerikacademy.com'
	};
console.log('');
console.log('Problem 2 result:');
outputMessage = 'Input text: ' + text + '; Output text: ' + text.bind(options);
document.getElementById('result2').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result2').innerHTML += '<br /><span class="explanation">Please, see the result in the console!</span>';