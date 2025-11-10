// object => document => object-literal
// {key:value} pair

let object = {
    name: 'Rishabh Yadav',
    age: 21,
    maried:false,
    hobbies:['pub-G', 'coc', 'cs'],
    school: {
        Graduation:'jmpc',
        XII: 'jmpc',
        X: 'pvm',
    },
};

// console.log(object.name);
// console.log(object.age);
// console.log(object.maried);
// console.log(object.school);

console.log(object.hobbies[3]);
console.log(object.school.XII);

console.log(typeof object);

for (let key in object) {
    console.log(object[key]);
}

let arr = ['pub-G', 'coc', 'cs'];
console.log(typeof arr);

for(let index of arr) {
    console.log(index);
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

Array.isArray()


