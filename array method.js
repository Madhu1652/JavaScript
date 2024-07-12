let nums = [24,78,56,98,65,12,15];
// nums.forEach( (n) => {  // forEach method
//     console.log(n*2)
// nums.forEach((n,i,nums)=>{
//     console.log(n, i, nums); //printing the values,index value, enter array
// });
 let result = nums.filter( n  => n%2==0) //we add result for reduce
     .map(n => n*2)
    //  .forEach(n => {  
    //    console.log(n)});
     .reduce((a,b) => a+b);
     console.log(result);