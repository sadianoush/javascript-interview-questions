class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('hero', 'balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('hero', 'salam', 25000);
console.log(friendlyPerson);

// function Person1(firstName, lastName, salary){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }

// const oldPerson = new Person1('grand', 'papa', 1200);
// console.log(oldPerson);