let num1= 3;
let num2 = 8.6;

let ans=Math.abs(num1-num2);
// console.log(ans);


// console.log(Math.round(num2));
// console.log(Math.ceil(num2));
//  console.log(Math.acos(num2));
// console.log(Math.clz32(num2));

// Task

// Q1. Round 5.6789 to 2 decimal places.
let num = 5.6789;
let rounded = num.toFixed(2); 
console.log(rounded);

// Q2.Find the ceiling value of 4.2.
let value1 = 4.2;
let ceiling = value1.toFixed(); 
console.log(ceiling);

// Q3. Find the floor value of 9.99.
let value2 = 9.99;
let floor = value2.toFixed(); 
console.log(floor);

// Q4.Generate a random number between 1 and 10.

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// Q5. Find the maximum value among 25, 78, 13, 56.
let a = 25, b = 78, c = 13, d = 56;
let maxValue = Math.max(a, b, c, d);

console.log("Maximum value is:", maxValue);
 

// Q6. Find the minimum value among -12, -5, 0, 8, 3
let minValue = Math.min(-12, -5, 0, 8, 3);
console.log("Minimum value is:", minValue);

// Q7. Calculate 2 raised to the power of 8
let powerValue = Math.pow(2, 8);
console.log("2 raised to the power of 8 is:", powerValue);

// Q8. Find the square root of 121
let sqrtValue = Math.sqrt(121);
console.log("Square root of 121 is:", sqrtValue);

// Q9. Round -3.45 to the nearest integer
let roundedValue = Math.round(-3.45);
console.log("Rounded value of -3.45 is:", roundedValue);

// Q10. Get the absolute value of -150
let absValue = Math.abs(-150);
console.log("Absolute value of -150 is:", absValue);


// Q11.Find the cube root of 64.
let cude = Math.cbrt(64);
console.log("cude root of 64:", cude);

// Q12 Generate a random decimal number between 0 and 1.
let randomDecimal = Math.random();
console.log(randomDecimal);

 // Q13. Round 7.555 to the nearest whole number
let rounded1 = Math.round(7.555);
console.log("Rounded:", rounded1); 

// Q14. Value of π up to 4 decimal places
let piValue = Math.PI.toFixed(4);
console.log("π up to 4 decimal places:", piValue); 

// Q15. log(100) base 10
let logBase10 = Math.log10(100);
console.log("log(100):", logBase10); 

// Q16. ln(e^5)
let lnValue = Math.log(Math.exp(5));
console.log("ln(e^5):", lnValue);

// Q17. sine of 90 degrees
let sine90 = Math.sin(90 * Math.PI / 180);
console.log("sin(90°):", sine90); 

// Q18. cosine of 0 degrees
let cosine0 = Math.cos(0 * Math.PI / 180);
console.log("cos(0°):", cosine0); 

// Q19. tangent of 45 degrees
let tangent45 = Math.tan(45 * Math.PI / 180);
console.log("tan(45°):", tangent45); 

// Q20. Convert 30 degrees to radians
// let radians30 = 30 * Math.PI / 180;
// console.log("30° in radians:", radians30);
