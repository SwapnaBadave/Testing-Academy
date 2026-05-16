var a =10;// global variable(scope)

console.log(a);

function print(){ console.log("Hello TestingAcademy");
    var a= 20; // local variable(scope)
    console.log(a);
    if(true){
        var a= 30;      // var is function scope. so it will change value of a to 30 in whole function
}
}
print();    