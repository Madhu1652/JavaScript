// let nums = [4,7,9,5]
// console.log(nums);
// let [a,b,c,d]=nums;
// console.log(d);


// let a=5;
// let b=9;
// [a,b]=[b,a]  // swapping two numbers
// console.log(a,b);


let words = "My name is Madhu AL vlog".split(' '); //spliting into array
// let [a,b,c,d,] =words;
// console.log(a,b);
let [a,b,c, ...d] =words;
console.log(d);