let num = 1
function show(){
    console.log('Hi',num);
    num++;
    if(num<=99)
    show();   // calling itself
}
show();