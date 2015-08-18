//Problem 3

function countSubstr(text, subStr) {
    var currentIndex = 0,
        newIndex = 0,
        counter = 0;
    text = text.toLowerCase();
    subStr = subStr.toLowerCase();
    while (currentIndex > -1 && currentIndex < text.length - 1) {
        newIndex = text.indexOf(subStr, currentIndex);
        if (newIndex > -1) {
            currentIndex = newIndex + subStr.length;
            counter += 1;
        } else {
            currentIndex = -1;
        }
    }
    return counter;
}

var subStr = 'in',
    text = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
console.log('');
console.log('Problem 3 result:');
outputMessage = 'In text: "' + text + '" the substring "' + subStr + ' is found ' + countSubstr(text, subStr) + ' times';
document.getElementById('result3').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';