let map = new Map();
map.set('Madhu','Java');//to add the map
map.set('Chaya','Java');
map.set('Veena','JS');
console.log(map.get('Madhu'));
// for(let[k,v] of map){
// console.log(k,v);
// }
map.forEach((v,k) =>{
    console.log(k,v);
});
