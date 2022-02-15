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
1) OPERATORS
2) REGULAR EXPRESSION
3) DOM MANIPULATION

4) FUNCTIONS
5) FUNCTION METHODS
6) ASYNC FUNCTIONS

7) CONSTRUCTOR FUNCTIONS
8) OBJECT METHODS

9) LOOPS
10) CONDITIONALS

11) ARRAY METHODS
12) STRING METHODS
13) MAP METHODS
14) SET METHODS

15) MATH OBJECT
16) NUMBER OBJECT
17) DATE OBJECT
18) INTL OBJECT

19) WINDOW OBJECT
20) TIMERS

21) CONCEPTS
*/

/* 
=================================================================
OPERATORS / CHARACTERS
=================================================================
*/

// === vs ==
2 === "2"; //false
2 == "2"; //true

// !==
// Strict inequality

// %
// Remainder operator

// Nullish coalescing operator
// returns right side if left is null or undefined ('' and '0' return true)

// typeof
// returns type of arg

// instanceof
// instanceName instanceof className
// returns boolean

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
// .firstElementChild.color;
// .lastElementChild.height;
// .parentElement;
// .parentNode;
// .classList.add('classNoPeriod').remove('classNoPeriod').toggle('classNoPeriod').contains('classNoPeriod);
// .innerHTML = 'Hello There';
// .textContent = 'Hello There';
// .value = '12';
// .setAttribute('attribute', 'arg');
// .style.backgroundColor = '#837950';

// element.insertAdjacentHTML(position, text);
// insert HTML at given position ('beforebegin, 'afterbegin', 'beforeend', 'afterend')

// .prepend();
// insert node objects or a string before last child of element
// div.prepend(...elements);
// div.prepend('string');

// .append();
// insert node objects or a string after last child of element
// div.append(...elements);
// div.append('string');

// .before();
// insert nodes before current element
// div.before(...elements)

// .after();
// insert nodes after current element
// div.after(...elements)

// .appendChild();
// insert node after children
// div.appendChild(singleChild);

// .remove();
// remove element

// .removeChild(childName);
// remove child element

// .focus();
// set cursor on element

// .blur()
// remove cursor from element

// .scrollIntoView({ behavior: 'smooth' });
// scrolls element into view

// .getBoundingClientRect().height.width;
// return sizes of DOM element

/* ------------------------------------------------------------------------------------------------ */
/* DEBOUNCE */

// Debounce avoids accidental double slicks with a pause timer

/* 
=================================================================
FUNCTIONS
=================================================================
*/

// Arrow Function
const arrowFunction = (birthYear = 1990) => 2037 - birthYear;
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
ASYNC FUNCTIONS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/* FETCHING PROMISES */
const fetchFunc = function (param) {
  return fetch(`https://restcountries.com/v3.1/name/${param}`).then(
    (response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    }
  );
};

/* ------------------------------------------------------------------------------------------------ */
/* BUILDING PROMISES */
const customPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("😀 You Win");
    } else {
      reject(new Error("😐 You Lose"));
    }
  }, 1000);
});
// customPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
//   .finally(() => console.log('Finished'));

/* ------------------------------------------------------------------------------------------------ */
/* AJAX REQUESTS */
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(2)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

/* ------------------------------------------------------------------------------------------------ */
/* ASYNC / AWAIT */

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      AJAX(`https://restcountries.com/v3.1/name/${c1}`),
      AJAX(`https://restcountries.com/v3.1/name/${c2}`),
      AJAX(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

/* ------------------------------------------------------------------------------------------------ */

// Promise.race([]);
// returns first fulfilled promise

// Promise.all([]);
// returns 1 resolved promise only if all are resolved

// Promise.allSettled([]);
// returns 1 resolved promise even if 1 or more promises are rejected

// Promise.any([]);
// returns resolved promise as soon as 1 internal promise is resolved

// JSON.stringify(objectToConvert)
// convert JS object to JSON string

// JSON.parse(stringToMakeJSON)
// convert JSON string to JS object

// Response.json();
// convert a promise response to a JS object

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

// Object Notation (dot vs bracket)
benDutton.firstName === benDutton["firstName"];

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

// Break / Continue
// Break ends a loop or switch
// Continue skips an iteration

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
const conditional4 = conditional1 && conditional2;
// === 3

// Nullish Coalescing Operator
const conditional5 = conditional1 ?? conditional2;
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

// Convert Array to Object
// ['a', 'b', 'c'].reduce((a, v) => ({ ...a, [v]: v}), {})

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
// returns new array by merging arrays args with array the method is called on

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

// Chaining
// Can chain if previous method returns 'this'

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

/* ------------------------------------------------------------------------------------------------ */
/* CONVERT STRING */

// Convert string to binary
// string.toString(2)

// Convert string to UTF-16
// string.charCodeAt(indexOfCharacter);
// 'string'.charCodeAt("2"));

// Convert UTF-16 to string
// String.fromCharCode('charCodeToConvert')
// String.fromCharCode("108");

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
/* ROUNDING */

// Math.ceil
Math.ceil(5.05) === 6;

// Math.floor()
Math.floor(5.95) === 5;

// Math.round
Math.round(5.55) === 6;

/* ------------------------------------------------------------------------------------------------ */
/* MIN / MAX */

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

const today = Date.now();

// let birthday = new Date('December 17, 1995 03:24:00')
// let birthday = new Date('1995-12-17T03:24:00')
// let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
// let birthday = new Date(1995, 11, 17, 3, 24, 0)
// let birthday = new Date(628021800000)            // passing epoch timestamp

// new Date();
// returns new date object of current date and time

// Date.parse();
// parses a date from a string

// Date.toISOString();
// convert date to ISO format

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

/* ------------------------------------------------------------------------------------------------ */
/* DATES */

const newIntlDate = new Intl.DateTimeFormat(
  /* locales */ [],
  /* options object */ { dateStyle: "full" }
).format(today);
// locales = 'en-GB', 'en-US', [] - empty array to use browser default
// options = dateStyle: 'full', timeStyle: 'long'

/* ------------------------------------------------------------------------------------------------ */
/* CURRENCY */

const num = 837383.039;

const intlNum = new Intl.NumberFormat("en-US", {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
}).format(num);

/* 
=================================================================
WINDOW OBJECT
=================================================================
*/

// window.history.back();
// loads previous page

// window.location.href;
// returns url of current page

// window.location.assign(url)
// loads new document

/* 
=================================================================
TIMERS
=================================================================
*/

// setTimeout(() => {}, timeToWait);
// call function after time in milliseconds

// clearTimeout(timeoutFunction);
// cancel a currently running timer

// setInterval(() => {}, timeToWait);
// call a function every interval

/* 
=================================================================
CONCEPTS
=================================================================
*/

/* ------------------------------------------------------------------------------------------------ */
/* MODULES */

// <script src="module.js" type="module"></script>

// IMPORT / EXPORT
// export const VAR = 5;
// import { VAR } from "module.js"
// import * from "module.js"

// export default new jsClass();
// import jsClass from "module.js"

/* ------------------------------------------------------------------------------------------------ */
/* JS DOCS */

/**
 * Description of Function
 * @param {boolean} [sorted=true] Parameter 1
 * @param {Object | Object[]} data Parameter "data" of multiple type options
 * @returns {undefined | string} What does the function return?
 * @this {Object} Target of "this" keyword
 * @author Benjamin Dutton
 * @todo Finish implementation
 */

/* ------------------------------------------------------------------------------------------------ */
/* NAMING CONVENTIONS */

// protected field
// used to indicate that the field should not be accessible from UI

// function constructor
// begin with a capital letter

// constants / global config variables
// UPPERCASE

/* ------------------------------------------------------------------------------------------------ */
/* MISC */

// Type Coercion
// Javascript coerces numbers to strings
const typeCoercion = 1 + "1"; // '11'

/* 
===================================================================================
IMPLEMENT
===================================================================================
*/

/* API / LIBRARIES */
// responsive images
// leaflet map
// leaflet - open street maps
// geocode.xyz api
// geolocation
// intersection api
// local storage
// localStorage.setItem / get with JSON.parse

// moment.js
// restcountries api
// spoonacular api
// search
// pagination
// smilga mini projects
// debounce
// render error

// Pig Game
// Guess My Number
// Flappy Bird
// Arcade Game

/* 
===================================================================================
LEARN
===================================================================================
*/

/* CONCEPTS */
// commonjs modules in node.js (used in webpack)
// recursive functions
// getters and setters
// MVC Architecture (model, view, control) / publisher-subscriber pattern
// const self = this - to avoid the fact that this in nested functions points to global object for no reason
// arguments keyword is arraylike structure that lists all arguments
// closures - keep scope chain in tact for nested functions

/* NEEDS ANOTHER TUTORIAL */
// destructuring
// async / await
// function reference vs call?
// create a promise
// debounce
// bigint
// working with dates

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
// Thennable - can be returned by a .then() method
// declarative > functional programming
// pure vs impure functions with side effects
// runtime
// xml
// IDE
// jsx
// programmatically
// controlled component
// stateful = smart vs stateless vs dumb

// library vs api vs framework
// dom traversal
// architecture - user stories
// What the hell is the dom?
// what is OOP with classes
// first class functions

// TECH ------------------------------------------------------------------------------
// underscore js
// lodash
// npm event emitter
// outdated module pattern (common.js?)
// typescript === javascript with var types?

// SEO ------------------------------------------------------------------------------
// backlinks - other websites linking to your page
// search intent - reason behind the search
// - content type - blogs, videos, products, tools
// - content format
// - content angle - product is: (new, comfortable, durable, cheap)
// depth - full completion of searchers query

// keyword research - find the words people are actually searching
// search volume - # searches of a given keyword
// traffic potential - searches of given keyword and related keywords, likely higher than the traffic volume (find by comparing with other pages)
// Business potential - economic value of a keyword
// ranking difficulty - how hard will it be to rank for the keyword?
// modifier words - best, top, cheap
// look at competitors keywords

// Do top competitors match search intent?
// Can you compete with the backlinks?
// Equally or more topically specific/relevant/authoritative?

// ON PAGE SEO -------------------------------------------------------------
// Satisfy search intent ---
// Don't stuff exact match keyword or stuffing every keyword
// compare kayword gap common among top results
// examine relevant top result similarities
// include keyword in titles when possible
// target keyword in slug when possible
// keyword in meta description
// internal page links whenever possible
// optimize images for google image search (file names, keyword in alt text, compress images)
// open graph meta tags
// <meta property="og:type" content="article" />
// <meta property="og:locale" content="en_GB" />

// BACKLINKS (link building) -------------------------------------------------
// create/buy/earn
// create = directories, social media profile links, blog posts
// buy = is expensive and can get you banned
// earn = email outreach, become a source for a publisher, earn a link from a visitor on their site
// good links are from websites with relevant content, authority (high SEO)
// on anchor tag: rel="nofollow"(no SEO) rel="ugc"(user-generated content) rel="sponsored" - these are relevant at googles discretion, no rel = follow(good for seo)
// good links are featured prominently

// avoid noindex meta tag
// robots.txt file includes a disallow function for site crawlers
// yoast to generate sitemap and submit it to google search console
// <link rel="canonical" href="https://preferredDomainOfDuplicates">
// page load speed

// cache website content through hostinger
// compress images
// remove orphan pages
