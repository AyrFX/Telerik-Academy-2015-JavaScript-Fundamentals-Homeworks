//Problem 4
function getMinAndMaxProperty(element) {
    var smallest='~', largest='';
    for (var prop in element) {
        if (smallest > prop) {
            smallest = prop;
        }
        if (largest < prop) {
            largest = prop;
        }
    }
    return 'Lexicographically smallest property: ' + smallest + '; Lexicographically largest property: ' + largest;
}


console.log('');
console.log('Problem 4 result:');
outputMessage = 'Document - ' + getMinAndMaxProperty(document);
document.getElementById('result4').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
outputMessage = 'Window - ' + getMinAndMaxProperty(window);
document.getElementById('result4').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
outputMessage = 'Navigator - ' + getMinAndMaxProperty(navigator);
document.getElementById('result4').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result4').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result4').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';