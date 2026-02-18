// JavaScript Coding Practice Questions for Interns
// 1. Declare a variable using var, assign a number, redeclare it, and print both values.
var no = 12;
var no = 13;
console.log("The no. is:", no);
// 2. Declare a variable using let and try redeclaring it. Observe the result.
//   let no1 = 13;
//    let no1 =23;
//    console.log("Which no is print now")
//   SyntaxError
// 3. Create a const variable and attempt to reassign it. Handle the error.
//    const num1 = 12;
//     const num11 =13;
//  here is also SyntaxError is show
// to handle this we can use try and catch

// 4. Write a program demonstrating block scope using let.
let a = () => {
  let b = 120;
  console.log("the number is:", b);
};
a();
// 5. Write a program showing var does not follow block scope
var num = 124;
function num1() {
  console.log(num);
}
num1();
// 6. Create a const object, modify one property, and print before and after values.

const obj = {
  name: "Sara Khan",
  age: 12,
  city: "Mauganj",
};
console.log(obj);
obj.name = "Lajo";
console.log(obj);
// 7. Declare variables of all primitive data types and print their typeof.
let str = "Warish Khan";
console.log("the name is:", str);
console.log(typeof str);

let number = 1244;
console.log(number);
console.log(typeof number);

let boolean = true;
console.log("value is true:", boolean);
console.log(typeof boolean);

let un;
console.log("undefined", un);
console.log(typeof un);
let nu = null;
console.log("null", nu);
console.log(typeof nu);

let bigint = 12456324253477463525n;
console.log("the number is high", bigint);
console.log(typeof bigint);

let sy = Symbol("asim");
console.log(sy);
console.log(typeof sy);

// 8. Create an array of 5 numbers, print the first element, and add one new element.
let arr = [1, 2, 3, 4, 5];
console.log("the first value of array is:", arr[0]);
arr.push(6);
console.log(arr);

// 9. Create an object with name, age, city and print all values using dot notation.
let obj1 = {
  name: "Somesh Tiwari",
  age: 23,
  city: "Kotma",
  isPassed: true,
};
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.city);
console.log(obj1.isPassed);
// 10. Write a program to check whether a variable is an array.

let arr1 = [1, 2, 3, 4, 5];
console.log("Yes this an array:", Array.isArray(arr1));
// 11. Copy a primitive variable into another variable, modify one, and print both.

let ab = 12;
ba = ab;
ba = 34;
console.log(ab);
console.log(ba);
// 12. Copy an object into another variable, modify one property, and print both objects.

let obj2 = {
  name: "Sanjana ",
  age: 12,
  isActive: true,
};
console.log(obj2);
let otherObj = obj2;
otherObj.name = "Patel ";
console.log(otherObj);
// 13. Perform all arithmetic operations (+, -, *, /, %) on two numbers.

let x = 10;
let y = 44;
console.log("Sum is:", x + y);

let x1 = 22;
let y1 = 4;
console.log("Sub:", x1 - y1);

let x2 = 32;
let y2 = 3;
console.log("multiply is:", x2 * y2);
let x3 = 21;
let y3 = 3;
console.log("div is :", x3 / 3);

let x4 = 12;
let y4 = 2;
console.log("% is :", x4 % y4);
let e = 3;
let r = 2;
console.log("ex :", e ** 2);

// 14. Swap two numbers using a third variable.
let swap = 12;
let swap1 = 10;
let temp;
temp = swap; //12;
swap = swap1; //10;
swap1 = temp; // 12;
console.log(swap);
console.log(swap1);

// 15. Swap two numbers without using a third variable.

let swam = 12;
let swam1 = 10;
swam = swam + swam1; //12+10 = 22
swam1 = swam - swam1; // 22-10 = 12
swam = swam - swam1; //  22-10= 12
console.log(swam);
console.log(swam1);
// 16. Write a program to check whether a number is even or odd.
let evenOdd = 29;
console.log(evenOdd % 2 === 0 ? "even" : "odd");
// 17. Compare two values using == and === and print the results.

let aq = 12;
let aq2 = "12";
console.log(aq === aq2);
let aq3 = 12;
let aq4 = 13;
console.log(aq3 === aq4);
// 18. Use logical operators: If age > 18 AND hasID is true, print 'Allowed', otherwise 'Not Allowed'.

let age = 21;
let hasID = true;
console.log(age > 18 && hasID === true ? "Allowed" : " Not Allowed");
// 19. Write a program to find the largest of three numbers.


// 20. Write a function declaration to calculate the square of a number.
let ptm = prompt("give a number");
function abc(n) {
  console.log("Sqaure:", n * n);
}
abc(ptm);

// 21. Write a function expression to calculate the cube of a number.
let cube = prompt("give a another number");
let fnc = function (c) {
  console.log("cube:", c * c * c);
};
fnc(cube);

// 22. Write an arrow function to add two numbers.

let add = (a, b) => {
  console.log(a + b);
};
add(9, 4);
// 23. Create an arrow function to check if a number is positive, negative, or zero.
let numbers = (a) => {
  console.log(a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero");
};

numbers(2);

// 24. Write a function that returns sum, difference, and product of two numbers.

let sumDiffPro = (a, b) => {
  console.log("Adding:", a + b);
  console.log("Sub:", a - b);
  console.log("Multi:", a * b);
};
sumDiffPro(2, 4);
// 25. Create a function that takes an array and returns the sum of all elements.
// 26. Create a calculator function that takes (num1, num2, operator) and performs +, -, *, /.

let calcu = (a, b, operator) => {
  if (operator === "+") {
    console.log(a + b);
  } else if (operator === "-") {
    console.log(a - b);
  } else if (operator === "*") {
    console.log(a * b);
  } else if (operator === "/") {
    console.log(a / b);
  }
};
calcu(2, 4, "*");
