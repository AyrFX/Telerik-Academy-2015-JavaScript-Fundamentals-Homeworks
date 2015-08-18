//Problem 4

function countDivs() {
    var elementsArray = document.getElementsByTagName('div');
    return elementsArray.length;
}


console.log('');
console.log('Problem 4 result:');
outputMessage = 'The number of "div" elements in this HTML page is ' + countDivs();
document.getElementById('result4').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result4').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';