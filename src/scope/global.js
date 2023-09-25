// Variables

var a; //declaramos la variable

var b = 'b'; //declaramos y asignamos

b= 'bb'; //redesignacion

var a = 'aa';  //redecladaracion

// Global Scope

var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // global cuidado con esta forma de declarar
    console.log(country);
}

countries();
console.log(country);
