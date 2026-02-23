// Conditional + Iterative Practice Questions 
// 1. Print Numbers 1 to 100 - Print all numbers from 1 to 100 using a loop. 

 for(let i =1; i<=100; i++){
     console.log("Number is :",i)
 }
// 2. Print Only Even Numbers - Print all even numbers between 1 and 50. 
  for(i=1; i<=50; i++){
     if(i%2===0){
         console.log(" This Number is Even:",i)
     }
  }
// 3. FizzBuzz Problem - Print numbers from 1 to 50. If divisible by 3 print 'Fizz', if divisible 
// by 5 print'Buzz', if divisible by both print 'FizzBuzz'. 

 for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz:", i);
    }
    else if (i % 3 === 0) {
        console.log("Fizz:", i);
    }
    else if (i % 5 === 0) {
        console.log("Buzz:", i);
    }
    else {
        console.log(i);
    }

}
// 4. Prime Number Checker - Take a number and check whether it is prime or not using 
// loop and condition
  
// 5. Factorial of a Number - Find factorial of a given number using loop. Example: 5 → 5 × 
// 4 × 3 × 2 × 1. 

//  let num = prompt("give a Number ")
//   let number = parseInt(num)
 let num =4;
   let factorial =1;
   for(let i = 1; i<=num; i++)
   {
    factorial = factorial*i ;
   }
     console.log( "Factorial:",factorial)
// 6. Reverse a Number - Input: 1234 Output: 4321. Use loop and condition. 

 let number3 = 1234;
let reverse = 0 ;
    while(number3 > 0){
   let Digits = number3%10;
    reverse = reverse * 10 + Digits      
     number3 =  Math.floor(number3/10)
 }
 console.log("Number is Reverse", reverse)
// 7. Sum of Digits - Input: 456 Output: 4 + 5 + 6 = 15. 
  // let number =prompt("give a number ")
  //  let number1 = parseInt(number)
// let number = 1233444;
//  let sum= 0;
//   while(number1>0)
//     {
//     let count = number1%10;
//       sum = sum+count;
//       number1 = Math.floor(number1/10)
//  }
//  console.log("Sum is:",sum)

// 8. Count Digits in a Number - Input: 98765 Output: 5. 
 let numbers =1234445;
  console.log(numbers.toString().length)
// 9. Palindrome Number - Check if a number is palindrome. Example: 121 → Palindrome, 
// 123 → Not palindrome. 

let int = 120;
 let ori = int;
  let palindrome =0;
   while(int>0){
     let Digits = int %10;
      palindrome = palindrome * 10 + Digits; 
      int = Math.floor(int/10)
    }
     if(ori === palindrome){
       console.log("Number is Palindrome",palindrome)
     }
     else{
       console.log("Number is  not Palindrome")
     }
// 10. Multiplication Table - Print table of any number (up to 10).

// let table =prompt("Give a Number ")
//  let change =parseInt(table)

//  for(let i=1; i<=10; i++){
//     console.log(`${i} x ${change} = ${i*change}`)
//  }

// 11. Largest Number in Array - Find the largest number using loop and condition. 
let arr=[0,22,3,42,2,3]
let max=arr[0]
for(let i=0;i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i]
  }
}
  console.log(max)
 

// 12. Count Vowels in String - Loop through string and count vowels. 
// 13. Armstrong Number - Check if a number is Armstrong. Example: 153 → 1³ + 5³ + 3³ = 
// 153. 
   let number2 = 153;
    let store = number2 ;
     let count = 0; 
       
     while (number2>0) {
       let div = number2 % 10;
       count = count + div**3;
        number2 = Math.floor(number2/10)
     }

      if(store === count){
         console.log("Number is Armstrong ")
      
      }
       else {
         console.log("Number is Not Armstrong ")
       }
// 14. Pattern Printing (Star Pattern) - Print the following pattern:  
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j =1 ; j <= i; j++) {
    row = row + "* ";
  }

  console.log(row);
}
    
// 15. Number Guess Game (Basic Logic) - Predefine a secret number, ask user to guess, 
// use loop until correct guess. 

let secret = 12;
let guess;

while (guess !== secret) {

  guess = parseInt(prompt("Guess the Real Number"));

  if (guess > secret) {
    console.log("Too High ");
  } 
  else if (guess < secret) {
    console.log("Too Low ");
  } 
  else {
    console.log(" Winner!");
  }

}