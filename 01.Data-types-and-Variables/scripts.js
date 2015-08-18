//Problem 1
var arrayVar = ['any text', 12, 7.34, undefined, false, function demofunction() {console.log('This is demo function')}];
document.getElementById('result1').innerHTML += '<br />Array literal created.';
console.log('Array literal created.');
var boolVar = true;
document.getElementById('result1').innerHTML += '<br />Boolean literal created.';
console.log('Boolean literal created.');
var intVar = 3254;
document.getElementById('result1').innerHTML += '<br />Integer literal created.';
console.log('Integer literal created.');
var floatVar = 7.12;
document.getElementById('result1').innerHTML += '<br />Floating-point literal created.';
console.log('Floating-point literal created.');
var objectVar = {pet: 'dog', breed: 'labrador'};
document.getElementById('result1').innerHTML += '<br />Object literal created.';
console.log('Object literal created.');
document.getElementById('result1').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';

//Problem 2
var qString = '\'How you doin\'?\', Joey said';
console.log(qString);
document.getElementById('result2').innerHTML += '<br />' + qString;
document.getElementById('result2').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';

//Problem 3
document.getElementById('result3').innerHTML += '<br />The type of arrayVar is ' + typeof(arrayVar) + '.';
console.log(' The type of arrayVar is ' + typeof(arrayVar));
document.getElementById('result3').innerHTML += '<br />The type of boolVar is ' + typeof(boolVar) + '.';
console.log(' The type of boolVar is ' + typeof(boolVar));
document.getElementById('result3').innerHTML += '<br />The type of intVar is ' + typeof(intVar) + '.';
console.log(' The type of intVar is ' + typeof(intVar));
document.getElementById('result3').innerHTML += '<br />The type of floatVar is ' + typeof(floatVar) + '.';
console.log(' The type of floatVar is ' + typeof(floatVar));
document.getElementById('result3').innerHTML += '<br />The type of objectVar is ' + typeof(objectVar)+ '.';
console.log(' The type of objectVar is ' + typeof(objectVar));
document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';

//Problem 4
var nullVar = null;
var uDefVar = undefined;
document.getElementById('result4').innerHTML += '<br />The type of nullVar is ' + typeof(nullVar) + '.';
console.log(' The type of arrayVar is ' + typeof(nullVar));
document.getElementById('result4').innerHTML += '<br />The type of uDefVar is ' + typeof(uDefVar)+ '.';
console.log(' The type of arrayVar is ' + typeof(uDefVar));
document.getElementById('result4').innerHTML += '<br /> <span class="explanation">The result is reported in the console also.</span>';