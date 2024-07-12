
let alien={
    name:'Madhu',
    age: 23,
    clg: {
        clg_name:'JSS',
        sec:'B',
        Course:'CSE'
    }
}
//console.log(alien.clg.Course?.length);
//delete alien.clg.sec;
//console.log(alien);

// applying for in loop
for(let key in alien.clg){
    console.log(key,alien.clg[key]);
}
