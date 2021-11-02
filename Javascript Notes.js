/* ENABLE STRICT MODE */
"use strict";

/* EXAMPLE VALUES */
const birthYear = 1994;
const day = "wednesday";
const benLikes = [
  ["dessert", "ice cream"],
  ["sweet", "candy"],
  ["hobby", "music"],
  ["show", "ATLA"],
  ["animal", "dogs", "cats", "squirrels"],
];
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

// Nullish coalescing operator
// returns right side if left is null or undefined ('' and '0' return true)

// typeof
// returns type of arg

// +var
// convert var to number

// ++var / var++
// returns increased value before / after incrementing

// ...
// Rest of args
function logArgs(firstArg, ...remainingArgs) {
  console.log(firstArg);
  console.log(remainingArgs);
}
// Spreading out arrays / sets
const spreadArr = [...benLikes, ...ordersSet];

/* ------------------------------------------------------------------------------------------------ */

// ?.
// Optional Chaining - if the previous item in the chain does not exist, the operation returns undefined

// ??
// Nullish Coalescing Operator - returns right side if left side is null or undefined
// Often paired with ?. optional chaining (alternative to || that allows for '0' or '')

/* 
=================================================================
SELECTORS / EVENT HANDLERS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/*  SELECTORS */

// document.querySelector('');
const selectIDElement = document.querySelector("#page-structure");
const selectClassElements = document.querySelectorAll(".section");
const selectClosestParentElement = selectIDElement.closest(".section");

/* ------------------------------------------------------------------------------------------------ */
/*  EVENT HANDLERS */

// addEventListener('')
// function has no return value / does not run automatically so it is not called (no parentheses)
selectIDElement.addEventListener("click", function (e) {
  e.target.innerHTML = "New Inner HTML";
});

// addEventListener to multiple
selectClassElements.forEach((node) =>
  node.addEventListener("click", changeColor)
);
function changeColor() {
  this.style.backgroundColor = "#491745";
}

// addEventListener for keyboard events
document.addEventListener("keyup", (e) => {
  if (e.code === "Space" || e.key === "d") {
    document.body.style = "color: white; background-color: #111111";
  }
});

/* ------------------------------------------------------------------------------------------------ */
/* EVENTS / KEY CODES */

// click, mouseup, mousedown
// resize
// scroll
// blur, focus

// keyup, keydown
// e.code === 'Space', 'Numpad1', 'Numpad2'
// e.key === 'Escape', 'Enter', 'Tab', 'Control', 'ArrowUp', 'ArrowRight', 'a', 'b', '1', '2'

/* ------------------------------------------------------------------------------------------------ */
/* OPTIONS */

// .children.length;
// .classList.add('classNoPeriod').remove('classNoPeriod').toggle('classNoPeriod');
// .innerHTML = 'Hello There';
// .textContent = 'Hello There';
// .value = '12';
// .setAttribute('attribute', 'arg');
// .style.backgroundColor = '#837950';

// element.insertAdjacentHTML(position, text);
// insert HTML at given position ('beforebegin, 'afterbegin', 'beforeend', 'afterend')

// .append();
// insert node objects or a string after last child of element
// div.append(...elements);
// div.append('string');

// .appendChild();
// insert node after children
// div.appendChild(singleChild);

// .before();
// insert nodes before current element
// div.before(...elements)

// .after();
// insert nodes after current element
// div.after(...elements)

// .focus();
// set cursor on element

// .blur()
// remove cursor from element

/* ------------------------------------------------------------------------------------------------ */
/* DEBOUNCE */

// Debounce avoids accidental double slicks with a pause timer

/* 
=================================================================
FUNCTIONS
=================================================================
*/

// Arrow Function
const arrowFunction = (birthYear) => 2037 - birthYear;
const yearsTill2037 = arrowFunction(birthYear);

// Function Declaration
function functionDeclaration() {
  console.log("This is a function expression");
}

// Function Expression - value is not hoisted
const functionExpression = function () {
  console.log("This is a function expression");
};

// (IIFE) Immediately Invoked Function Expression
// within parentheses and called by parentheses
(function (n) {
  1 + 1 + n;
})(2);
// (() => {})()

/* 
=================================================================
FUNCTION METHODS
=================================================================
*/

// .bind('thisArg', 'funcArg1', 'funcArg2')
// returns new function with this context binded to this arg (does not call function), optionally set permanent value to args

// .call('thisArg', 'funcArg1', 'funcArg2')
// calls function with given this context, and manual args

// .apply('thisArg', 'funcArrArg')
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
const jonas = new Student("Jonas", 1991, "homo sapien", "biology");

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
StudentObject.init = function (firstName, birthYear, course) {
  PersonObject.init.call(this, firstName, birthYear);
  this.course = course;
};

// Instance
const jonasObject = Object.create(StudentObject);
jonasObject.init("Jonas Schmedtmann", 1979);

/* ------------------------------------------------------------------------------------------------ */
/* ES6 CLASS */

// Constructor
class PersonCl {
  // Private fields only accessible from within class
  #favColor = "blue";
  #favHobby = "ukulele";
  // Class init function
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
    // call parent constructor
    super(fullName, birthYear);
    this.course = course;
  }
}
// Instance
const jonasCl = new StudentCl("Jonas Schmetdmann", 1991, "biology");

/* 
=================================================================
OBJECT METHODS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/* METHODS ON OBJECT */

// Object.entries('')
// returns key, value pairs of arg

// Object.keys('')
// returns keys of arg

// Object.values('')
// returns values of arg

// Object.freeze('objToFreeze')
// freezes object and properties so that changes become syntax errors 1 level deep

// Object.fromEntries()
// create object from array or map
const lenBikes = Object.fromEntries(benLikes);

// Object.assign('target', ...sources)
// copy object
const denButton = Object.assign({}, benDutton);

/* ------------------------------------------------------------------------------------------------ */
/* SHARED OBJECT METHODS */

// .hasOwnProperty('prop');
// checks for local properties (does not look up prototype chain)

/* 
=================================================================
LOOPS
=================================================================
*/

// For
let forArr = [];
for (let i = benLikes.length; i >= 0; i--) {
  if (i === 3) continue;
  forArr[i] = `Ben Likes ${benLikes[i]}`;
}

// For of
let forOfArr = [];
for (const [index, like] of benLikes.entries()) {
  forOfArr.push(index + 1, like);
}

// For in
let forInArr = [];
for (const key in benDutton) {
  forInArr.push(key + ": " + benDutton[key]);
}

// While
const whileArrData = [6, 5, 4, 3, 2, 1];
let whileArr = [];
while (whileArrData.length > 0) {
  whileArr.push(whileArrData.pop());
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
const conditional1 = 0;
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
// === 3

// Nullish Coalescing Operator
const conditional4 = conditional1 ?? conditional2;
//  === 0

/* 
=================================================================
ARRAY METHODS
=================================================================
*/

// Array Constructor
const arrayConstructed = new Array(
  "number of elements OR element1",
  "element2",
  "elementETC"
);
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
// returns new value by iterating and reducing array

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
// new string: replace a string with another

// .replaceAll('toReplace', 'replaceWith');
// new string: replace a string with another

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
REGULAR EXPRESSIONS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/*  MODIFIERS */

// Regular Expression
// /term/

// /term/i
// case insensitive

// /term/g
// global: all instances of term

// /term\*/
// escapes to interpret '*' literally

// ^/term/
// matches term at beginning of expression

// /term/$
// matchers term at end of expression

// term1|term2
// matches term1 OR term2

/* ------------------------------------------------------------------------------------------------ */
/*  CHARACTERS */

// /\n/
// New Line

// /\s/
// White Space

// /[a-z]/i
// Letters

// /[0-9]/
// Numbers

/* 
=================================================================
WINDOW OBJECT
=================================================================
*/

// window.history.back
// loads previous page

// window.location.href
// returns url of current page

// window.location.assign()
// loads new document

/* 
=================================================================
MODULES
=================================================================
*/

// Module
// <script src="module.js" type="module"></script>

// IMPORT / EXPORT
// export const VAR = 5;
// import { VAR } from "module.js"
// import * from "module.js"

// export default new jsClass();
// import jsClass from "module.js"

/* 
=================================================================
ASYNC FUNCTIONS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/*  ASYNC / AWAIT */

/* 
=================================================================
CONCEPTS
=================================================================
*/

// Type Coercion
const typeCoercion = 1 + "1"; // '11'

// === vs ==
2 === "2"; //false
2 == "2"; //true

// Object Notation (dot vs bracket)
benDutton.firstName === benDutton["firstName"];

// Break / Continue
// Break ends a loop or switch
// Continue skips an iteration

// Set Default Arguments
function defaultArgsFunction(arg1 = "default1", arg2 = "default2") {
  console.log(`Your arguments are ${arg1} and ${arg2}`);
}

// Chaining
// Can chain if previous method returns 'this'

// _ convention
// used to indicate that the field should not be accessible from UI

// # private fields
// only accessible from within a class

// Convert string to binary
// string.toString(2)

// Convert string to UTF-16
// string.charCodeAt(indexOfCharacter);
// 'string'.charCodeAt("2"));

// Convert UTF-16 to string
// String.fromCharCode('charCodeToConvert')
// String.fromCharCode("108");

/* 
===================================================================================================================================================================================================
REVISIT
===================================================================================================================================================================================================
*/

// OPERATORS / STRINGS / DESTRUCTURING - CODING CHALLENGES AND ONWARD

/* API */
// restcountries api
// geocode.xyz api
// intersection api
// leaflet - open street maps
// local storage
// localStorage.setItem / get with JSON.parse
// geolocation
// spoonacular api

/* CONCEPTS */
// library vs api
// dom traversal
// architecture - user stories
// What the hell is the dom?
// OOP with classes
// declarative > functional programming
// pure vs impure functions with side effects
// commonjs modules in node.js (used in webpack)
// recursive functions
// this
// getters and setters
// MVC Architecture (model, view, control) / publisher-subscriber pattern
// const self = this - to avoid the fact that this in nested functions points to global object for no reason
// arguments keyword is arraylike structure that lists all arguments
// IIFE
// closures - keep scope chain in tact for nested functions
// first class functions
// debounce

/* ASYNC */
// async await with try/catch
// fetch
// JSON object
// promises
// promise.race, promise.all, promise.allSettled, promise.all, promise.any

// rest parameters create array
// outdated module pattern (common.js?)
// jsdocs comments
// ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {})
// bigint
// JSON.stringify(objectToConvert)
// JSON.parse(stringToMakeJSON)

/* NEEDS ANOTHER TUTORIAL */
// destructuring
// async / await

/* ----------------------------------------------------------------------------------------------- */

// Modal
// lazy loading
// tab menu
// slider
// mobile menu / sticky
// leaflet map
// responsive images
// section fade in w/ intersection
// pagination
// search
// Json converter
// debounce

// Pig Game
// Guess My Number
// Flappy Bird
// Arcade Game

// TERMS ------------------------------------------------------------------------------
// syntax parsers - turn code into computer readable code (with compiler / interpreter)
// lexical environment / scope / lexical scope - keeps variables in physically in writing
// execution context - controls what lexical environment is happening currently
// name / value pair - name can only have 1 value in a given context, value can be more name / value pairs
// global context creates global object / this keyword pointing to global object
// global === not inside a function
// Object literal syntax = creation of object with brackets
// Currying - creating a copy of a function with preset parameters (using bind)
// Classical inheritance -  many languages, complex
// Prototypal inheritance - javascript

// underscore js
// lodash
// npm event emitter

/* 
===================================================================================================================================================================================================
CODING CHALLENGES
===================================================================================================================================================================================================
*/
