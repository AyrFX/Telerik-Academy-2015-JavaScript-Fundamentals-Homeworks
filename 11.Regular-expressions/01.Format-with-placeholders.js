//Problem 1

String.prototype.format = function(options) {
	var prop,
	regex,
	result = this;
	for (prop in options) {
		regex = RegExp('#\{' + prop + '\}', 'gi');
		result = result.replace(regex, options[prop]);
	}
	return result;
}

var text = 'Hello, there! Are you #{name}? My name is #{name} and I am #{age}-years-old',
	options = {
		name: 'John',
		age: 13
	}
console.log('');
console.log('Problem 1 result:');
outputMessage = 'Input text: ' + text + '; Output text: ' + text.format(options);
document.getElementById('result1').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result1').innerHTML += '<br /><span class="explanation">Тhe demo uses the options object from the second example.</span>';