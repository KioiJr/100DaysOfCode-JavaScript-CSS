// The anonymous function is assigned to sum. Sum becomes the function.

let sum = function(a,b){ //a and b are parameters.
    return a+b;
}

// Also, you can assign sum to another variable, and that variable becomes a function.

let add = sum;
let result = add(23,45); //23 and 45 are arguments.

console.log(result ); 