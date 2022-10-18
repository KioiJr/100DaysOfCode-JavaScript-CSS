function greet(u){ //Defining function and letting it accept user.
    //The variable u is created inside the function making it a local variable.
    //Local variables cannot be accessed outside the function.
    return `Hello, ${u}`;
}
let user = 'Mutunga'; //User variable is created outside the function making it a global variable

let str = greet(user); //Passing user who is Mutunga.
console.log(str);