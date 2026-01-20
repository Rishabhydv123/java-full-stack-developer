  let person = {
    name: "shaad gaon boy"
}

class PersonDetails {
    constructor(age, city){
        ((this.age = age),(this.city = city));
    }
}

Object.assign(person,new PersonDetails(90, 'India'));

// console.log(person);

// call apply bind

let person1 = {
  name: 'shaad gaov boy',
};

class PersonDetails {
  setDetails(age, city) {
    ((this.age = age), (this.city = city));
  }
}

// !! we use here call

let obj = new PersonDetails();
// console.log(obj);

// call
// obj.setDetails.call(person, 24, 'pune');

// apply
// obj.setDetails.apply(person, [26, 'mumbai']);

let myBind = obj.setDetails.bind(person1, 24, 'pune');
console.log(myBind);

