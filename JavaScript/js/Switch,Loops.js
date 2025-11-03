// let AGE = 100;

// switch (true) {
//     case AGE >= 18 && AGE < 56:
//         console.log('Eligible for vote');
//         break;
//          case AGE >= 56 && AGE < 75:
//         console.log('Null for vote');
//         break;
//          case AGE >= 18:
//         console.log(' Not Eligible for vote');
//         break;
//     default:
//         console.log('key was not matched');
//         break;
// }
  

// Q1.Take a number (1–7). Print the day of the week.

const readline = require("readline-sync");

let day = parseInt(readline.question("Enter a number (1-7): "));

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid input! Please enter a number between 1 and 7.");
}


// Loop
let arr = [1,2,3];
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
    
}