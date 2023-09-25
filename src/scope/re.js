var firstName; // es Undefined
firstName = 'Oscar'; // aca le asignamos
console.log(firstName);

var lastName = "David"; // declaramos y asignamos
lastName = 'Ana'; // reasignamos
console.log(lastName);

var secondName = 'David'; // declaramos y asignamos
var secondName = 'Ana'; // reasignamos
console.log(secondName);

// Let 
// let no puede ser redeclarado pero si reasingnado

let fruit = 'Apple'; // declaramos y asignamos
fruit = 'Kiwi'; //reasignamos
console.log(fruit);


// Const
// const no puede ser reasignado ni redecladaro

const animal = 'Dog'; // declaramos y asignamos
// animal = 'cat';
console.log(animal);


// array o arreglos con const

const vehicles = [];

vehicles.push("208");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

