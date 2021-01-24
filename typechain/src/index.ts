interface Human {
    name: String;
    age: Number;
    gender: String;
}

const person = {
    age: 22,
    name: "nicolas",
    gender: "male"
};

const sayHi = (person: Human): String  => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

// console.log(sayHi("Nicolas", 444, "male"));
console.log(sayHi(person));

export {};