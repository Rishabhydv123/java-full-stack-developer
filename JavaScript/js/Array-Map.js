let number = 'helloo';

// Create an array of indexes + 1
let newArr = Array.from(number, (_, i) => i + 1);
// console.log(newArr);

// Map
let data = newArr.map((element, index) => {
  return element < 5 ? [index] : null;
});
// console.log(data);

// TAsk:
let array1 = [2, 7, 0, 3, 1, 6, 4, 8];
let newArray1 = array1.map(num => num + -2);
console.log(newArray1);




// Filter
let str = ["mango", "apple", "kiwi", "watermelon", "mango", "apple", "kiwi", "banana", "lich", "muskmelon"];

let data1 = str.filter((element, index) => {
  return index == 0;
});
// console.log(data1);

// forEach
str.forEach((el, i) => {
  // if (el === "apple") console.log(el, i);
});


// Reduce

let data2 = str.reduce((acc, curr) =>{
  // console.log(curr);
  acc[curr] = (acc[curr] || 0) +1;
  return acc;
}, {});

console.log(data2);


// Task: let array=[2,7,0,3,1,6,4,8] 

let array = [2, 7, 0, 3, 1, 6, 4, 8];
let value = array.reduce((acc, curr) => {
  // acc.push(curr * 2);
  return [...acc,curr*2];
}, []);

// console.log(value);


// HW
// const hello=["68","65", "6C", "6C", "6F"]

const hello = ["68", "65", "6C", "6C", "6F"];

const result = hello.reduce((acc, hex) => 
  acc + String.fromCharCode(Number("0x" + hex)), 
  ""
);

console.log(result); 
 