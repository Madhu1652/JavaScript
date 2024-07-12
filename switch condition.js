// monday-6am
let day='holiday';
switch(day){
    case 'Monday' :
    console.log("6am");
    break;
    case 'Tuesday' :
    console.log("6:30am");
    break;
    case 'Wednesday' :
    case 'Thurday' :
    console.log("4am");
    break;
    case 'Friday' :
    console.log("10am");
    break;
    case 'Sunday' :
    console.log("11:30am");
    break;
    default:
        console.log("sleep");
}