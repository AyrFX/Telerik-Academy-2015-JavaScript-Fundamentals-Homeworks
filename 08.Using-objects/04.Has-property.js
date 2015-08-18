//Problem 4
function hasProperty(obj, propName) {
	var prop;
	for (prop in obj) {
		if (prop === propName) {
			return true;
		}
	}
	return false;
}


var anyObject = {
	strProp: 'any string',
	numProp: 12,
	arrProp: ['strElement', 24, 5],
	objProp: {
		firstProp: 23,
		secondProp: [3, 4, 5],
		thirdProp: 'text property'
	},
},
prop,
propForSearch = 'numProp';

console.log('');
console.log('Problem 4 result:');
outputMessage = 'Example object properties: ';
for (prop in anyObject) {
	outputMessage += prop + ' = ' + firstObject[prop] + '; ';
}
document.getElementById('result4').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

if (hasProperty(anyObject, propForSearch)) {
	outputMessage = 'The object HAS property ' + propForSearch + '.';
} else {
	outputMessage = 'The object HASN\'T property ' + propForSearch + '.';
}

document.getElementById('result4').innerHTML += '<br />' + outputMessage + '<br />';
console.log(outputMessage);

document.getElementById('result4').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result4').innerHTML += '<br /><span class="explanation">The property for search can be changed by changing the propForSearch variable in the code.</span>';