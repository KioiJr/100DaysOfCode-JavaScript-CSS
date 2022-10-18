let names = ['Mercy','Miriam','Sally']
// Adding items to the array done can be in two ways:
names[3] = 'Sylvia';
names.push('Kelly')

console.log(names);
//You can also have objects and functions in an array:

let data = ['Joshua', {tech: 'JS'}, function(){console.log("Function in an array");}]

//Print the function
//Call it by accessing the its index number in the arrays.
data[2]();
