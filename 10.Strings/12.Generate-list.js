//Problem 12

function creatList(persons, template) {
    var i,
    result = '';
    for(i = 0; i < persons.length; i+=1) {
    	result += '<li>' + template.replace(/-{name}-/g, persons[i].name).replace(/-{age}-/g, persons[i].age) + '</li>';
    }
    return '<ul>' + result + '</ul>';
}

var persons = [{name: 'Pesho', age: 12}, {name: 'Katya', age: 21}, {name: 'Gosho', age: 17}, {name: 'Toshka', age: 16}],
	template = '<strong>-{name}-</strong> <span>-{age}-</span>';
console.log('');
console.log('Problem 12 result:');
outputMessage = 'List of persons: ' + creatList(persons, template);
document.getElementById('result12').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result12').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';