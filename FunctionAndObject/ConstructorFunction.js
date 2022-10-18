function Alien(name, tech){
    //to differentiate between a constructor function and a normal function, 
    //use a Capital letter in the beginning of the constructor function.
    this.name = name;
    this.tech = tech;

    //Adding a method
    this.work = function(){
        console.log("Learning");
    }
  
}

let alien1 = new Alien('Josh','JS')

console.log(alien1);
alien1.work();