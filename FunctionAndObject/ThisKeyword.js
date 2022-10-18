let laptop1 = {
    cpu: 'i7',
    brand: 'Lenovo Thinkpad',
    ram: '4Gb',
  //Add a function
  getProperty:function(){
    console.log(this.brand);
  }
}

let laptop2 = {
    brand: 'HP',
    cpu: 'i5',
    ram: 8,

    getProperty:function(){
        console.log(this.cpu);
    }
}

laptop1.getProperty();
laptop2.getProperty()