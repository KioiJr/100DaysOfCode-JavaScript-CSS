// When learning about data types, there are two categories: Primitive and Objects.

let input = 'name';
let alien = {
    //Assigning properties: There is a key and a value. Left side is the key, the right is the value.
    name:'Joshua', age:24, 
    continent:'Africa',
    'work exp':2 //Use single quotes for a two or more word property description. Underscore symbol can also be used.

}

// Printing all the properties of the object, just log its name. To fetch a single property of an object, you can use the dot operator or the square brackets as shown below.
console.log(alien);
console.log(alien.name);
console.log(alien['continent']);
console.log(alien['work exp']);
console.log(alien[input]);

