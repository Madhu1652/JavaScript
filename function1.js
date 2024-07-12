

let laptop1 = {
    cpu: 'i5',
    ram: 20,
    brand:'Apple',
    compare: function(other){
        //if(laptop1.cpu<laptop2.cpu)
         //   console.log(laptop1)
        //else{
            //console.log(laptop2);  (or)
            if(this.cpu<other.cpu)
                console.log(this);
            else{
                console.log(other);
        }
    },
 //   greet: function(){
    getConfig: function(){ 
        console.log(this.cpu)
    }
}

let laptop2 = {
    cpu: 'i20',
    ram: 16,
    brand:'HP',
 //   greet: function(){
    getConfig: function(){ 
        console.log(this.cpu)
    }
}
//laptop.greet() 
//laptop2.getConfig();

laptop1.compare(laptop2);
