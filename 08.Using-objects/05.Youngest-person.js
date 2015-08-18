//Problem 5
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

function findYoungest (persons) {
	var element,
		youngestIndex,
		minAge = Infinity;
	for (element in persons) {
		if (persons[element].age < minAge) {
			youngestIndex = element;
			minAge = persons[element].age;
		}
	}
	return persons[youngestIndex].toString();
}


var persons = [buildPerson('Pesho', 'Goshev', 30), buildPerson('Tosho', 'Moshev', 23), buildPerson('Dimo', 'Petrov', 16), buildPerson('Vlado', 'Kostov', 48)],
	element;

console.log('');
console.log('Problem 5 result:');
outputMessage = 'The array of persons contins: ';
for (element of persons) {
	outputMessage += element.toString() + ', age ' + element.age + '; ';
}
outputMessage += '<br />Youngest person is ' + findYoungest(persons);
document.getElementById('result5').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result5').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';