let number = 'helloo';

let newArr = Array.from(number,(_, i) => i+1);
console.log(newArr);


let data = newArr.map((Element, index, Array) =>{
    return Element < 5 ? [index] : null
    }
);
console.log(data);
