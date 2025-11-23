let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;
let n6 = 6;
let n7 = 7;
let n8 = 8;
let names = 'Rishabh Yadav..';

function name(a, b, c, d, e, f, g, i, naam) {
    // lexical scop
    // console.log(a, b, c, d, e, f, g, i);
    return[n1+ n2+ n3+ n4+ n5+ n6+ n7+ n8,naam];
    
}

let ans = name(n1, n2, n3, n4, n5, n6, n7, n8, names);
// console.log(ans);



        //                              Calculator Projects using Function
        // function name -> cal -> switch
        // user -> number1, number2 ,operator(+, -, * , /, %)
       

// function cal(number1, number2, operator) {
//     let result;

//     switch (operator) {
//         case '+':
//             result = number1 + number2;
//             break;

//         case '-':
//             result = number1 - number2;
//             break;

//         case '*':
//             result = number1 * number2;
//             break;

//         case '/':
//             result = number1 / number2;
//             break;

//         case '%':
//             result = number1 % number2;
//             break;

//         default:
//             return "Invalid operator! Please use +, -, *, /, or %.";
//     }

//     return `Result: ${result}`;
// }


// console.log(cal(10, 5, '+'));  
// console.log(cal(10, 9, '-'));  
// console.log(cal(20, 470, '*'));
// console.log(cal(10, 2, '/'));
// console.log(cal(55, 8, '%'));

let num_1=10;
let num_2=20;
let operators="/";

function calc(...arr){
    let n1=arr[0];
    let n2=arr[1];
    let s=arr[2];

    switch(s){
        case '+':
            return n1+n2;
            break;
        case '-':
                return n1-n2;
        case '*':
                return n1*n2;
        case '/':
                return n1/n2;
            default:
                return "Invalid operator! Please use +, -, *, /, or %."
    }
}
let ans1=calc(num_1,num_2,operators)
console.log(ans1);



