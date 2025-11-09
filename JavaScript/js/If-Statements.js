let AGE = 75;

if(AGE >=18 && AGE<56){
    console.log("Eligible for vote");  
}
else if(AGE>=56 && AGE<75){
    console.log("Null for vote");
}
else{
    console.log("Not eligible fot vote");
}

// Q1. Check if a number is even or odd.
// let number = 10; 

// if (number % 2 === 0) {
//   console.log(number + " is even");
// } else {
//   console.log(number + " is odd");
// }

// Q2 Check if a number is positive, negative, or zero.

// let num = -10

// if (num > 1) {
//     console.log("The number is positive");
// } else if (num < -1) {
//     console.log("The number is negative");
// } else {
//     console.log("The number is zero");
// }

// Q3 Find the greater between two numbers
// let a1 = 10;
// let b2 = 25;

// if (a1 > b2) {
//   console.log("The greater number is: " + a1);
// } else {
//   console.log("The greater number is: " + b2);
// }

// Q4 Find the largest among three numbers.
// let a = 10;
// let b = 25;
// let c = 15;

// if (a >= b && a >= c) {
//   console.log("The largest number is: " + a);
// }
//  else if (b >= a && b >= c) {
//   console.log("The largest number is: " + b);
// }
//  else {
//   console.log("The largest number is: " + c);
// }

// Q5.Check if a given year is a leap year or not.
//  let year =2025;

// if (year % 4 === 0 && year % 100 !== 0) {
//   console.log(year + " is a leap year.");
// } else if (year % 400 === 0) {
//   console.log(year + " is a leap year.");
// } else {
//   console.log(year + " is not a leap year.");
// }


// Q6 A student’s score is given. Print the grade based on:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// below 60 → F

// let score = 85; 
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 80 && score <= 89) {
//   grade = "B";
// } else if (score >= 70 && score <= 79) {
//   grade = "C";
// } else if (score >= 60 && score <= 69) {
//   grade = "D";
// } else if (score < 60) {
//   grade = "F";
// } else {
//   grade = "Invalid score";
// }
// console.log("Grade:", grade);

// Q7 Categorize a person by age:
// 0–12 → Child
// 13–19 → Teen
// 20–59 → Adult
// 60+ → Senior
// let age = 20;

//   if (age < 13) {
//     console.log("Child");
//   } else if (age < 18) {
//     console.log("Teenager");
//   } else if (age < 60) {
//     console.log("Adult");
//   } else {
//     console.log("Senior");
//   } 


// Q8 Check if a given character is a vowel or consonant.
let char = 'a';

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}


// Q9 Check if a number is divisible by both 3 and 5.
// let number = 20; 

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("The number is divisible by both 3 and 5.");
// } else {
//     console.log("The number is not divisible by both 3 and 5.");
// }


// Q10 A temperature is given. Print:
// ≤ 10°C → Cold
// 11–25°C → Pleasant
// >= 25°C → Hot

let temperature = 30;

if (temperature > 25) {
  console.log("Hot");
} else if (temperature < 15) {
  console.log("Cold");
} else {
  console.log("Warm");
}




