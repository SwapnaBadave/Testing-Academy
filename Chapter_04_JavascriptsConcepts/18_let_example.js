let a= 10; // global variable(scope)
console.log(a);

function print (){ console.log("Hello TestingAcademy");
    let a= 20; // local variable(scope)
    console.log(a);
    if(true){
        let a= 30;      // let is block scope. so it will change value of a to 30 in the if block
 console .log(a);   }   
 console.log('f--->' ,a);// here it will print 20 because let is block scope. so it will not change value of a in the function scope
}
console.log('g--->' ,a); // here it will print 10 because let is block scope. so it will not change value of a in global scope. it will only change value of a in function scope
print();