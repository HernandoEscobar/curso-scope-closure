
function greeting() {
    let userName = 'Ana';  // variable local no puede ser usado fuera de esta funcion
    console.log(userName);
    
    if (userName === 'Ana') {
        console.log(`Hello ${userName}`);
    }
}

greeting();