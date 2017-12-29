/////// Destructuring//////

var person = {}
person.name ='abc';
person.age = '18';
person.location = 'TX';

var name = person.name;
var age = person.age;
var location = person.location;

var {name,age,location} = person;

var {name} = person;

//var name = person.name;

var person = ['abc', '1', 'TX'];

var name = person[0];
var age = person[1];
var location = person[2];

var [name,age, location] = person;


//////////Templete literals ////////

console.log(`line1
line2`);

console.log('line1\n' +
'line2');

///
var a = 5;
var b = 10;
console.log('Fifteen is '+ (a + b) + ' and\nnot' + (2 * a + b) + '.');

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}`);







