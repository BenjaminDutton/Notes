'use strict'

const birthYear = 1994;
const day = "wednesday";
const benLikes = ['ice cream', 'candy', 'music', 'ATLA', ['dogs', 'cats', 'squirrels']]
const benDutton = {
  firstName: "Benjamin",
  lastName: "Dutton",
};
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C++"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "False"],
]);
const ordersSet = new Set(["Item1", "Item3", "Item1", "Item2", "Item2"]);

/* 
1) OPERATORS / CHARACTERS
2) SELECTORS / EVENT HANDLERS

3) FUNCTIONS
4) FUNCTION METHODS

5) CONSTRUCTOR FUNCTIONS
6) OBJECT METHODS

7) LOOPS
8) CONDITIONALS

9) ARRAY METHODS
10) STRING METHODS
11) MAP METHODS
12) SET METHODS

14) MATH OBJECT
13) NUMBER OBJECT
15) DATE OBJECT
16) TIMERS

17) CONCEPTS
*/

/* 
=================================================================
OPERATORS / CHARACTERS
=================================================================
*/

// !==
// Strict inequality

// %
// Remainder operator

// &&
// And operator

// ||
// Or operator

// +var
// convert var to number

// ++var / var++
// returns increased value before / after incrementing

// ...
// Spread / Rest
// Spread elements out
function logArgs(firstArg, ...remainingArgs) {
    console.log(firstArg);
    console.log(remainingArgs);
}

/* ------------------------------------------------------------------------------------------------ */

// ?.
// Optional Chaining - if the previous item in the chain does not exist, the operation returns undefined

// ??
// Nullish Coalescing Operator - returns right side if left side is null or undefined
// Often paired with ?. optional chaining

/* ------------------------------------------------------------------------------------------------ 
/*  CHARACTERS */

// \n
// New Line

/* 
=================================================================
SELECTORS / EVENT HANDLERS
=================================================================
*/

// document.querySelector('');
const selectIDElement = document.querySelector('#page-structure');
const selectClassElements = document.querySelectorAll('.section');

// .children;
// .classList.add('').remove('');
// .innerHTML;
// .textContent;
// .value;
// .setAttribute('attribute', 'arg')
// .style.backgroundColor;

// .append();
// .before();

/* ------------------------------------------------------------------------------------------------ */
/*  EVENT HANDLERS */

// addEventListener('')
// function has no return value / does not run automatically so it is not called (no parentheses)
selectIDElement.addEventListener('click', function () {
  this.innerHTML = 'New Inner HTML';
})
function changeColor () {
  this.style.backgroundColor = "#491745";
}
selectClassElements.forEach((node) => node.addEventListener('click', changeColor));

/* 
=================================================================
FUNCTIONS
=================================================================
*/

// Arrow Function
const arrowFunction = birthYear => 2037 - birthYear; 
const yearsTill2037 = arrowFunction(birthYear);

// Function Declaration
function functionDeclaration() {
  console.log("This is a function expression");
};

// Function Expression
const functionExpression = function () {
  console.log("This is a function expression");
};

// (IIFE) Immediately Invoked Function Expression
(function () {
  // 1 + 1;
})()
// within parentheses and called by parentheses
// (function(){})()
// (() => {})()

/* 
=================================================================
FUNCTION METHODS
=================================================================
*/

// .bind('thisArg')
// returns new function with this context binded to this arg

// .call('thisArg', 'functionArg1', 'functionArgETC')
// calls function with given this context, and manual args

// .apply('thisArg', 'arrArg')
// calls function with given this context, and array arg


/* 
=================================================================
CONSTRUCTOR FUNCTIONS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/* CONSTRUCTOR FUNCTION */

// Constructor
const Person = function (firstName, birthYear, species) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.species = species;
};

// Constructor Method
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

// Child Class w/ Connected Prototype / Constructor
const Student = function (firstName, birthYear, species, course) {
  Person.call(this, firstName, birthYear, species);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Instance
const jonas = new Student("Jonas", 1991, "homo sapien", 'biology');

/* ------------------------------------------------------------------------------------------------ */
/* ES6 CLASS */

// Constructor
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
// Instance Methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
// Set property with a function
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
// Reference as property with a function
  get fullName() {
    return this._fullName;
  }
// Not passed down to instances
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

// Child Class
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  } 
}
// Instance
const jonasCl = new StudentCl("Jonas Schmetdmann", 1991, "biology");

/* ------------------------------------------------------------------------------------------------ */
/* OBJECT.CREATE(); */

// Constructor
const PersonObject = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Child Class
const StudentObject = Object.create(PersonObject);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// Instance
const jonasObject = Object.create(StudentObject);
jonasObject.init("Jonas Schmedtmann", 1979);

/* 
=================================================================
OBJECT METHODS
=================================================================
*/

// Object.entries('')
// returns key, value pairs of arg

// Object.keys('')
// returns keys of arg

// Object.values('')
// returns values of arg

/* 
=================================================================
LOOPS
=================================================================
*/

// For
let forArr = [];
for (let i = benLikes.length; i >= 0; i--) {
  if (i === 3) continue;
  forArr[i] = `Ben Likes ${benLikes[i]}`
}

// For of
let forOfArr = [];
for (const [index, like] of benLikes.entries()) {
  forOfArr.push( index + 1, like);
}

// While
const whileArrData = [6, 5, 4, 3, 2, 1];
let whileArr = [];
while (whileArrData.length > 0) {
  whileArr.push(whileArrData.pop())
}

// Switch Statement
switch (day) {
  case "monday":
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
    // console.log("Write code examples");
    break;
  default:
    console.log("Not a valid day!");
}

/* 
=================================================================
CONDITIONALS
=================================================================
*/
let century;
let rotations = 4;
const conditional1 = undefined;
const conditional2 = 3;

/* ------------------------------------------------------------------------------------------------ */

// If Else
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

// Ternary Operator
century >= 21 ? "solar energy" : "fossil fuel";

// Short Circuiting
const conditional3 = conditional1 || conditional2;

// Nullish Coalescing Operator
const conditional4 = conditional1 ?? conditional2

/* 
=================================================================
ARRAY METHODS
=================================================================
*/

// Array Constructor
const arrayConstructed = new Array('number of elements OR element1', 'element2', 'elementETC')
// constructs array from number of elements (if given a number arg) or from elements

/* NEW ARRAY */

// .fill(value, start, end);
// fill array with value arg from start to end indexes

// .flatMap((currentValue, index, array) => {}, thisArg);
// returns new array via callback function and then flattens with depth of 1

// .map('value', 'index', 'arr');
// create a new array by iterating over elements with a callback function

// .slice(start, end);
// returns new portion of array based on parameters (end not included);

// .from('arrayLike', (element, index) => {});
// returns new array from arrayLike and performs callback function on each element

/* ------------------------------------------------------------------------------------------------ */
/* ITERATE */

// .forEach(('element', 'index', 'array') => callback function, thisArg)
// iterates over array and executes callback function

// .filter((element, index, arr) => {function}, thisArg);
// returns new arr with elements that pass function test

// .reduce(('accumulator', 'value', 'index', 'array') => {function}, initialValue)
// iterate and reduce array 

/* ------------------------------------------------------------------------------------------------ */
/* FIND */

// .find((element, index, array) => {}, thisArg);
// returns first element that matches testing function

// .findIndex((element, index, array) => element > 50);
// return first index matching arg condition

// .indexof('searchElement', 'fromIndex');
// return index of argument from 

/* ------------------------------------------------------------------------------------------------ */
/* RETURN VALUES */

// .some((element, index, array) => {}, thisArg);
// returns boolean after searching for test condition

// .includes(' ');
// returns boolean

// .every((element, index, arr) => {}, thisArg);
// returns boolean after checking every element for test function

// .entries()
// returns [index, value] pair

/* ------------------------------------------------------------------------------------------------ */
/* MANIPULATE */

// .concat(array2, array3, arrayETC);
// merge array args with array the method is called on

// .toString();
// returns array as string separated by commas

// .join('');
// join by string arg

// .flat(depth);
// returns new array flatted to specified depth

/* ------------------------------------------------------------------------------------------------ */
/* MUTATE ARRAY */

// splice(start, deleteCount, item1, item2)
// delete items at start index and then insert new items

// .sort(('firstElement', 'secondElement') => {});
// sort by first character of Number of String

// .reverse();
// flip all elements in array

/* ------------------------------------------------------------------------------------------------ */
/* MUTATE SINGLE ELEMENT */

// .push(' ');
// add element to end of array
// return element

// .pop();
// remove element from end of array
// return element

// .unshift(' ');
// add element to beginning of array
// return element

// .shift();
// remove element from beginning of array
// return element

/* ------------------------------------------------------------------------------------------------ */
/* ARRAY PROPERTIES */

// .length property
// returns length

/* 
=================================================================
STRING METHODS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/* CREATE NEW STRING */

// .slice(start, end);
// return new string, end index not included

// .substr('startIndex', 'length');
// returns new string from start index and including the length of characters

/* ------------------------------------------------------------------------------------------------ */
/* MANIPULATE */

// .concat(string2, string3, stringETC);
// merge string args with string the method is called on

// .join('')
// join array elements into a new string by character of arg 

// .repeat('')
// repeat as many times as the arg

// .toLowerCase()
// make all lowercase

// .toUpperCase();
// make all uppercase

// .replace('toReplace', 'replaceWith');
// replace a string with another

// .replaceAll('toReplace', 'replaceWith');
// replace a string with another

/* ------------------------------------------------------------------------------------------------ */
/* CHANGE SPACING */

// .trim();
// remove space before and after

// .padStart('padCharacterNum', 'padCharacter');
// pad beginning of string

// .padEnd('padCharacterNum', 'padCharacter');
// pad end of string

/* ------------------------------------------------------------------------------------------------ */
/* RETURN VALUE */

// .includes('');
// returns boolean

// .startsWith('');
// returns a boolean

// .indexOf('searchValue', fromIndex)
// returns index of first arg starting at fromIndex

// .lastIndexOf('searchValue', fromIndex)
// returns index of final instance starting at fromIndex

/* ------------------------------------------------------------------------------------------------ */
/* MUTATE STRING */

// .reverse();
// reverses array elements

// .split('');
// split string by arg

/* ------------------------------------------------------------------------------------------------ */
/* STRING PROPERTIES */

// .length property
// returns length

/* 
=================================================================
MAP METHODS
=================================================================
*/

// .forEach((value, key, map) => {function});
// iterate over each item and perform callback function

// .delete('key')
// deletes key value pair

// .keys();
// returns keys

// .values();
// returns values

// .entries();
// returns key, value pairs

// .clear
// wipes entire map object

// .set('key', 'value')
// sets a new or old key, value pair

// .get('key')
// returns value

// .has('key)
// returns boolean

// .delete('key)
// delete key, value pair at arg key

/* ------------------------------------------------------------------------------------------------ */
/* MAP PROPERTIES */

// .size property
// returns size

/* 
=================================================================
SET METHODS
=================================================================
*/

// .forEach((value, _, set) => {function});
// iterate over each item and perform callback function

// .values();
// returns values

// .entries

// .add('')
// adds argument to set

// .has();
// returns boolean

// .delete('');
// deletes argument

// .clear()
// wipes entire set

/* ------------------------------------------------------------------------------------------------ */
/* SET PROPERTIES */

// .size property
// returns size

/* 
=================================================================
MATH OBJECT
=================================================================
*/

// Math.random()
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

/* ------------------------------------------------------------------------------------------------ */
/*  ROUNDING */

// Math.ceil
Math.ceil(5.05) === 6;

// Math.floor()
Math.floor(5.95) === 5;

// Math.round
Math.round(5.55) === 6;

/* ------------------------------------------------------------------------------------------------ */
/*  MIN / MAX */

// Math.min('', '', '')
Math.min(2, 6, 4) === 2;

// Math.max('', '', '')
Math.max(4, 8, 2) === 8;

/* ------------------------------------------------------------------------------------------------ */

// Math.abs()
Math.abs(-12.3) === 12.3;

// Math.trunc()
Math.trunc(2.48) === 2;

/* 
=================================================================
NUMBER OBJECT
=================================================================
*/

// Number.parseInt('string', 'base');
// parses integer from string in given base if string begins with number

// Number.parseFloat('string');
// parse a floating number from string

// Number.isFinite(value);
// returns boolean

// Number.isInteger('');
// returns boolean

// Number.isNaN(value);
// returns false if isNaN and the type is Number

/* 
=================================================================
DATE OBJECT
=================================================================
*/

// Date();

// Date.prototype.getDate();
// Date.prototype.getDay();
// Date.prototype.getFullYear();
// Date.prototype.getHours();
// Date.prototype.getMilliseconds();
// Date.prototype.getMinutes();
// Date.prototype.getMonth();
// Date.prototype.getSeconds();
// Date.now();

/* 
=================================================================
INTL OBJECT
=================================================================
*/

// Intl.DateTimeFormat();
// Intl.NumberFormat();
// Intl.Locale('locales', 'options');

/* 
=================================================================
TIMERS
=================================================================
*/

// setTimeout(() => {}, timeToWait);
// call function after time in milliseconds

// clearTimeout();

// setInterval();

/* 
=================================================================
CONCEPTS
=================================================================
*/

// Type Coercion
const typeCoercion = 1 + '1'; // '11'

// === vs ==
2 === "2"; //false
2 == "2"; //true

// Object Notation (dot vs bracket)
benDutton.firstName === benDutton['firstName'];

// Break / Continue
// Break ends a loop or switch
// Continue skips an iteration

// Set Default Arguments
function defaultArgsFunction (arg1 = 'default1', arg2 = 'default2') {
  console.log(`Your arguments are ${arg1} and ${arg2}`);
}

// Chaining
// Can chain if previous method returns 'this'

// Getters and Setters
















/* 
===================================================================================================================================================================================================
REVISIT
===================================================================================================================================================================================================
*/

// strings / destructuring - coding challenge #4
// strings / destructuring - coding challenge #2
// functions returning functions
// bind, call, apply
// short circuiting vs nullish coalescing operator
// bigint
// .fullName vs ._fullName in a constructor
// static methods

// geolocation
// open street maps
// leaflet
// intersection api
// What the hell is the dom?
// library vs api
// dom traversal
// .toggle
// architecture - user stories
// rest parameters create array
// local storage
// JSON object
// location object

// constructor challenges
// 11 and 12

// Modal
// lazy loading
// tab menu
// slider

// Pig Game
// Guess My Number
// Flappy Bird

/* 
===================================================================================================================================================================================================
CODING CHALLENGES
===================================================================================================================================================================================================
*/

console.log(Date());
console.log(parseInt(''));
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}
