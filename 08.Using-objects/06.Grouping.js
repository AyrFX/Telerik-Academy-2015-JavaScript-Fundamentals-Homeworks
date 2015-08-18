//Problem 6
function buildPerson(firstName, lastName, age) {
	return {
		firstName: firstName,
		lastName: lastName,
		age: age,
		toString: function printFullName() {
			return this.firstName + ' ' + this.lastName;
		}
	}
}

function group(persons, groupBy) {
	var element,
		resultArray = [];
	switch (groupBy) {
		case 'firstName': {
			for (element in persons) {
				if (resultArray[persons[element].firstName] === undefined) {
					resultArray[persons[element].firstName] = [persons[element]];
				} else {
					resultArray[persons[element].firstName].push(persons[element]);
				}
			}
			break;
		}
		case 'lastName': {
			for (element in persons) {
				if (resultArray[persons[element].lastName] === undefined) {
					resultArray[persons[element].lastName] = [persons[element]];
				} else {
					resultArray[persons[element].lastName].push(persons[element]);
				}
			}
			break;
		}
		case 'age': {
			for (element in persons) {
				if (resultArray[persons[element].age] === undefined) {
					resultArray[persons[element].age] = [persons[element]];
				} else {
					resultArray[persons[element].age].push(persons[element]);
				}
			}
			break;
		}
		default: return resultArray;
	}
	return resultArray;
}


var persons = [buildPerson('Gosho', 'Goshev', 20), buildPerson('Gosho', 'Peshev', 30), buildPerson('Gosho', 'Toshev', 40), buildPerson('Pesho', 'Goshev', 30),
			   buildPerson('Pesho', 'Peshev', 40), buildPerson('Pesho', 'Toshev', 20), buildPerson('Tosho', 'Goshev', 40), buildPerson('Tosho', 'Peshev', 20), buildPerson('Tosho', 'Toshev', 30)],
	element,
	resultArray;

console.log('');
console.log('Problem 6 result:');
outputMessage = 'The array of persons contins: ';
for (element of persons) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}

resultArray = group(persons, 'firstName');

outputMessage += '<br />The group with first name \'Pesho\' contains: ';
for (element of resultArray['Pesho']) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}
outputMessage += '<br />The group with first name \'Gosho\' contains: ';
for (element of resultArray['Gosho']) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}
outputMessage += '<br />The group with first name \'Tosho\' contains: ';
for (element of resultArray['Tosho']) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}

resultArray = group(persons, 'lastName');

outputMessage += '<br />The group with last name \'Peshev\' contains: ';
for (element of resultArray['Peshev']) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}
outputMessage += '<br />The group with last name \'Goshev\' contains: ';
for (element of resultArray['Goshev']) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}
outputMessage += '<br />The group with last name \'Toshev\' contains: ';
for (element of resultArray['Toshev']) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}

resultArray = group(persons, 'age');

outputMessage += '<br />The group with age 20 contains: ';
for (element of resultArray[20]) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}
outputMessage += '<br />The group with age 30 contains: ';
for (element of resultArray[30]) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}
outputMessage += '<br />The group with age 40 contains: ';
for (element of resultArray[40]) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}

document.getElementById('result6').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result6').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';