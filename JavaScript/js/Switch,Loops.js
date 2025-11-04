let AGE = 100;

switch (true) {
    case AGE >= 18 && AGE < 56:
        console.log('Eligible for vote');
        break;
         case AGE >= 56 && AGE < 75:
        console.log('Null for vote');
        break;
         case AGE >= 18:
        console.log(' Not Eligible for vote');
        break;
    default:
        console.log('key was not matched');
        break;
}
  

// Q1.Take a number (1–7). Print the day of the week.

let day = 5
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



//  Q2 Take a month number (1–12). Print the month name.
let month=8;

switch (month){
    case 1:
        console.log("jan");
        break;
        case 2:
        console.log("Feb");
        break;
        case 3:
        console.log("march");
        break;
        case 4:
        console.log("April");
        break;
        case 5:
        console.log("May");
        break;
        case 6:
        console.log("June");
        break;
        case 7:
        console.log("july");
        break;
        case 8:
        console.log("August");
        break;
        case 9:
        console.log("sept");
        break;
        case 10:
        console.log("Oct");
        break;
        case 11:
        console.log("Nov");
        break;case 12:
        console.log("Dec");
        break;
        default:
            console.log(null);
}


//Q3 Input a number (1–4). Print:
// 1 → Addition
// 2 → Subtraction
// 3 → Multiplication
// 4 → Division

let num2=4;
switch (num2){
    case 1:
        console.log("Adition");
        break;
        case 2:
        console.log("subtraction");
        break;
        case 3:
        console.log("Multiplicatin");
        break;
        case 4:
        console.log("Division");
        break;
        default:
            console.log(null);
}

// Q4 Input a grade (A, B, C, D, F). Print a message like Excellent, Good, etc.
let grade = 'B';
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Very Good");
    break;
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Nice");
    break;
  case "F":
    console.log("Poor");
    break;
  default:
    console.log("Invalid grade");
}


// Q5 Input the first letter of a traffic light (R, Y, G). Print Stop, Ready, or Go.
let light = 'G'; 
switch (light) {
  case 'R':
    console.log("Stop");
    break;
  case 'Y':
    console.log("Ready");
    break;
  case 'G':
    console.log("Go");
    break;
  default:
    console.log("Invalid input");
}


// Q6 Input a browser name (Chrome, Firefox, Edge, Safari). Show a launch message.
let browser = 'chrome';  
switch (browser) {
  case 'chrome':
    console.log("Launch Chrome...");
    break;
  case 'firefox':
    console.log("Launch Firefox...");
    break;
  case 'edge':
    console.log("Launch Edge...");
    break;
  case 'safari':
    console.log("Launch Safari...");
    break;
  default:
    console.log("null browser!");
}



// Q7 Input a number (1–3). Print:
// 1 → Circle Area
// 2 → Square Area
// 3 → Triangle Area
let number = 3; 
switch (number) {
  case 1:
    console.log("Circle Area");
    break;
  case 2:
    console.log("Square Area");
    break;
  case 3:
    console.log("Triangle Area");
    break;
  default:
    console.log("Null");
}

// Q8 Input a language code (en, fr, es, de). Display the language name.
let language = 'en';  
switch (language) {
  case 'en':
    console.log("English");
    break;
  case 'fr':
    console.log("French");
    break;
  case 'es':
    console.log("Spanish");
    break;
  case 'de':
    console.log("German");
    break;
  default:
    console.log("null Language...!");
}






                                             // Loop
// let arr = [1,2,3];
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
   
// }



// Q1.Print number from 1 to 10 using a loop
// let lastnumber = 50;
// let i = 1;
// for (let i = 1; i<=lastnumber; i++){
//   if(i%2==0){
//     console.log(i);
    
//   }else{
//     console.log(i);
    
//   }

// }


// Q2 Print all even numbers between 1 and 50.
// for (let i = 1; i <= 50; i += 2) {
//     console.log(i);
//   }


  //Q4 Print the multiplication table of 5.
  // for (let i = 1; i <= 10; i++) {
  //   console.log(`5 x ${i} = ${5 * i}`);
  // }


//  Q8 Print the cube of the first 10 natural numbers.
  // for (let i = 1; i <= 10; i++) {
  //   console.log(i ** 3);
  // }

  
//  Q3 Print all odd numbers between 1 and 50.
  // for (let i = 1; i <= 50; i += 2) {
  //   console.log(i);
  // }

  
// Q2 print all even numbers between 1 and 100 using a loop?

// for(let num=1; num<=100; num++){
//     if(num % 2 === 0){
//         console.log(num);
//     }   }

// Q5 print number from 100 down to 1 (reverse order)








