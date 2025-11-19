                //    push

let arr = [1,2,3,4];
let arr1 = [1,2,3,4];

// arr.push(5,67,5)
// console.log(arr);

Array.prototype.push = function (...value){
    // console.log("arr", arr);
    let index = this.length;
    for(let i =0;i<value.length;i++){
        this[index+1] = value[i];
    }
    this[index] = value;
    return "done";
};

let ans = arr1.push(5,6,7);
// console.log("ans", ans);
console.log("arr1", arr1);
// console.log("arr", arr);



//  pop 

//  unshift
//  shift
//  Map
//  filter


                    //  pop 
let arr2 = [1, 2, 3, 4];

Array.prototype.countElements = function () {
    let count = 0;
    this.forEach(() => count++);
    return count;
};

let ans1 = arr2.countElements();
console.log("countElements:", ans1);

// Custom pop-like method
Array.prototype.yes = function () {
    let last_index = this.length - 1;

    delete this[last_index];   // removes last element but keeps a hole
    console.log("arr2 after delete:", this);

    // remove empty slots
    return this.filter(el => el != null);
};

arr2 = arr2.yes();
arr2 = arr2.yes();
let anss = arr2.yes();

console.log("arr2:pop_app", anss);



