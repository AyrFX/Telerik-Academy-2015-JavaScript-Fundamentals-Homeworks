//Problem 7

function parseURL(url) {
    var serverStart,
        resourceStart,
        parsed = {};
    serverStart = url.indexOf('://');
    resourceStart = url.indexOf('/', serverStart + 3);
    parsed.protocol = url.substring(0, serverStart);
    parsed.server = url.substring(serverStart + 3, resourceStart);
    parsed.resource = url.substring(resourceStart);
    return parsed;
}

var url = 'http://telerikacademy.com/Courses/Courses/Details/239',
    parsed = parseURL(url);
console.log('');
console.log('Problem 7 result:');
outputMessage = 'URL to parse: ' + url + '; Result: protocol: ' + parsed.protocol + '; server: ' + parsed.server + '; resource: ' + parsed.resource;
document.getElementById('result7').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result7').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';