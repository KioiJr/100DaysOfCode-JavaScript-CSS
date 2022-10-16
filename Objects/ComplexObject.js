let alien = {
    name: 'Joshua',
    tech: 'JS',

    // A complex object means an object within an object.
    //Here is an example.
    laptop:{
        brand: 'Thinkpad', cpu: 'i7', ram:'4Gb', speed: '2.1Ghz'
    },
    education1: {
        uni: 'Jooust',classification:'2nd Upper'
    }
}
 console.log(alien);
 console.log(alien.laptop.brand.length);

// Use the double coalescing operator denoted as '??' to verify if an object or property is defined to avoid errors.
//Example: try to print education which does not exist.
console.log(alien.education1);


// To delete a property of the object, use the delete keyword.
delete alien.education1
console.log(alien);
