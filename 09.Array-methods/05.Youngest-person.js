//Problem 5
function buildPerson(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        introduce: function introduce() {
            var output = this.firstName + ' ' + this.lastName + ', ' + this.age + ' years old';
            if (gender) {
                output += ', female';
            } else {
                output += ', male';
            }
            return output;
        }
    }
}

function fillPersonsArray() {
    var resultArray = new Array(10),
        i,
        gender,
        fNameIndex,
        lNameIndex,
        fNames = ['Pesho', 'Gosho', 'Tosho', 'Dimo', 'Vasko', 'Maria', 'Svetla', 'Tina', 'Galya', 'Petya'],
        lNames = ['Peshev', 'Goshev', 'Toshev', 'Dimov', 'Vasilev', 'Dimitrova', 'Yaneva', 'Peteva', 'Gosheva', 'Tosheva'];
    for (var i = 0; i < 10; i+=1) {
        gender = Math.round(Math.random());
        if (gender) {
            fNameIndex = precRound(getRandomInRange(5, 9), 0);
            lNameIndex = precRound(getRandomInRange(5, 9), 0);
        } else {
            fNameIndex = precRound(getRandomInRange(0, 4), 0);
            lNameIndex = precRound(getRandomInRange(0, 4), 0);
        }
        resultArray[i] = buildPerson(fNames[fNameIndex], lNames[lNameIndex], precRound(getRandomInRange(0, 50), 0), !!gender);
    }
    return resultArray;
}

if (!Array.prototype.find) { //MDN Code
    Array.prototype.find = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

function getYoungestMale(persons) {
    var minAge = Infinity;
    persons.forEach(function(item) {
                        if (item.age < minAge && !item.gender) {
                            minAge = item.age;
                        }
                    });
    return persons.find(function(item) {return item.age === minAge});
}

var persons = fillPersonsArray();
console.log('');
console.log('Problem 5 result:');
outputMessage = 'The array of persons contins: ';
persons.forEach(function(item) {outputMessage += item.introduce() + '; ';});
document.getElementById('result5').innerHTML += '<br />' + outputMessage + '<br />';
console.log(outputMessage);

outputMessage = 'The youngest male is: ' + getYoungestMale(persons).introduce();
document.getElementById('result5').innerHTML += outputMessage + '<br />';
console.log(outputMessage);

document.getElementById('result5').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result5').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';