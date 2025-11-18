let arr = [1,2,3,4];
let arr1 = [1,2,3,4];

// arr.push(5,67,5)
// console.log(arr);

Array.prototype.push = function (value){
    // console.log("arr", arr);
    let index = this.length;
    this[index] = value;
    return "done";
};

let ans = arr1.push(5,6,7,8);
console.log("ans", ans);
console.log("arr1", arr1);
console.log("arr", arr);

