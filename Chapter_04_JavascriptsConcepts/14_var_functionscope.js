var a= 10; // global variable(scope)
console.log(a);

function print (){ console.log("Hello TestingAcademy");
    var a= 20; // local variable(scope)
    console.log(a);
    if(true){
        var a= 30;      // var is function scope. so it will change value of a to 30 in whole function
 console .log(a);   }   
 console.log('f--->' ,a);// here it will print 30 because var is function scope. so it will change value of a to 30 in whole function
}
console.log('g--->' ,a); // here it will print 10 because var is function scope. so it will not change value of a in global scope. it will only change value of a in function scope
print();