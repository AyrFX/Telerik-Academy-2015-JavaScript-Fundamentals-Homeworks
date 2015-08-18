//Problem 9

function extractEmails(text) {
    var emailsArray = [],
        newSearchIndex = 0.
        emailStartIndex = 0,
        emailEndIndex = 0;
    do {
        newSearchIndex = text.indexOf('@', emailEndIndex);
        if (newSearchIndex > -1) {
            emailStartIndex = text.lastIndexOf(' ', newSearchIndex);
            emailEndIndex = text.indexOf(' ', newSearchIndex);
            if (text[emailEndIndex - 1] !== '@') {
                emailsArray.push(text.substring(emailStartIndex, emailEndIndex));
            }
        }
    } while (newSearchIndex > -1);
    return emailsArray;
}

var text = 'df ada@ dgafgsdgh sfdhsd fhs@dfh.bg sgsgj dfgj dfj@dfgj.cz dfj dfjdf jd fjdjsr tjs gdfg.net dfgnry shj mjgk@ lhi ;uio f@hjsd.com fga efaw e rhgf jd gukr yukd fgjs h arh  aeg',
    emails = extractEmails(text);
console.log('');
console.log('Problem 9 result:');
outputMessage = 'Example text : ' + text + ';';
document.getElementById('result9').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);
outputMessage = 'E-mails: ' + emails.join(', ');
document.getElementById('result9').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result9').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';