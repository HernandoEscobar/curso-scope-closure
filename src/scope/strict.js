// Modo estricto 
// al usar use strict no puede ejecutarse sin ser declarado

'use strict';

pi = 3.1416;
console.log(pi);

function myFunctcion() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunctcion());