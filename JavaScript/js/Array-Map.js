let number = 'helloo';

// Create an array of indexes + 1
let newArr = Array.from(number, (_, i) => i + 1);
console.log(newArr);

// Map
let data = newArr.map((element, index) => {
  return element < 5 ? [index] : null;
});
console.log(data);

// Filter
let str = ["mango", "apple", "kiwi", "watermelon", "mango", "apple", "kiwi", "banana", "lich", "muskmelon"];

let data1 = str.filter((element, index) => {
  return index === 0;
});
console.log(data1);

// forEach
str.forEach((el, i) => {
  if (el === "apple") console.log(el, i);
});


// Reduce




