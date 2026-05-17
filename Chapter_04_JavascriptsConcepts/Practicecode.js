for (var i = 0; i < 3; i++) {
     setTimeout(() => console.log(i), 100);
   } //    here it will print 3,3,3 because var is function scope. so it will create only one variable i for whole loop and it will print value of i after loop is finished. so it will print 3 in each iteration of loop

   for (let j = 0; j < 3; j++) {
     setTimeout(() => console.log(j), 100);// here it will print 0,1,2 because let is block scope. so it will create new variable j for each iteration of loop and it will print value of j in each iteration
   }
 

 