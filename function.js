function user(n) {
    let num=2;
    console.log(num);
    return `hello ${n}!!`
}
    let name='moni';
    let str=user(name);
    console.log(str);
    

    
//function add(num1,num2,num3=1) {
//    console.log(num1,num2,num3);
 //   return num1 + num2 + num3; 
//}
//let result=add(7,4,9);
//console.log(result);
//    or

let add=( num1,num2,num3=1) => num1+num2+num3
   let result= add(2,5) 


console.log(result);