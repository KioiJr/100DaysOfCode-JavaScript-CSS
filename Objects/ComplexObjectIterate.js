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

//To print all properties line by line, use the FOR IN LOOP
// for(let key in alien){
//     console.log(key, alien[key]);
   
// }
for(let key in alien.laptop){
    console.log(key, alien.laptop[key])
}