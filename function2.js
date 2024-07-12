
function Alien(name,tech){
       this.name=name;
       this.tech=tech;

       this.work=function(){            //adding method to object
        console.log("saving the bugs")
       }

       
}
let alien1= new Alien('Madhu','JS')
let alien2= new Alien('Amith','AIT')
//alien1.tech='BGS'
console.log(alien1);
alien1.work();            // calling the function