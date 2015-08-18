//Problem 3
function deepCopy(obj) {
	if (obj === null || typeof(obj) !== 'object') {
		return obj;
	}

	var prop,
		newObj = obj.constructor();
	for (prop in obj) {
		newObj[prop] = deepCopy(obj[prop]);
	}
	return newObj;
}


var firstObject = {
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
secondObject = deepCopy(firstObject);

console.log('');
console.log('Problem 3 result:');
outputMessage = 'Input object properties: ';
for (prop in firstObject) {
	outputMessage += prop + ' = ' + firstObject[prop] + '; ';
}
document.getElementById('result3').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

outputMessage = 'Output object properties: ';
for (prop in secondObject) {
	outputMessage += prop + ' = ' + secondObject[prop] + '; ';
}
document.getElementById('result3').innerHTML += '<br />' + outputMessage + '<br />';
console.log(outputMessage);

document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';