class Human {
    public name: String;
    public age: Number;
    public gender: String;
    constructor(name: String, age: Number, gender: String) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

// interface Human {
//     name: String;
//     age: Number;
//     gender: String;
// }

const person = {
    age: 22,
    name: "nicolas",
    gender: "male"
};

const sayHi = (person: Human): String  => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

// console.log(sayHi("Nicolas", 444, "male"));
console.log(sayHi(lynn));

export {};