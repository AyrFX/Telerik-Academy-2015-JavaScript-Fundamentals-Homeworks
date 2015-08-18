//Problem 1
var demoArray = new Array(20);
for (var i = 0; i < demoArray.length; i++) {
    demoArray[i] = i * 5;
}
console.log('');
console.log('Problem 1 result:');
outputMessage = 'Array elements: ' + demoArray.join(', ');
document.getElementById('result1').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result1').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';