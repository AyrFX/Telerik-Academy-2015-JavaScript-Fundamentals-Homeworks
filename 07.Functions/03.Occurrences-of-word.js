//Problem 3

function occurrencesCount(inputText, wordForSearch, caseSensitive) {
    var counter = 0,
        i;
    inputText = inputText.replace(/\.|\,|\;|\!|\?|\-|\"|\'|\(|\)|\[|\]|\{|\]/g, ' ');
    if (arguments.length === 2) {
        caseSensitive = false;
    }
    if (!caseSensitive) {
        inputText = inputText.toLowerCase();
        wordForSearch = wordForSearch.toLowerCase();
    }
    inputText = inputText.split(' ');
    for (i = 0; i < inputText.length; i+=1) {
        if (inputText[i] === wordForSearch) {
            counter += 1;
        }
    }
    return counter;
}


var inputText = 'Write a function that finds all the occurrences of word in a text. The search can be case sensitive or case insensitive. Use function overloading.',
    wordForSearch = 'text',
    caseSensitive = false;
console.log('');
console.log('Problem 3 result:');
outputMessage = 'Given text: ' + inputText + '; Occurrences of word "' + wordForSearch + '": ' + occurrencesCount(inputText, wordForSearch);
document.getElementById('result3').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result3').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';