let a=10

let retrycount = 0;
retrycount = retrycount + 1;
console.log("retry count is ", retrycount  );

let retrycount = 5; // we can not redeclare variable with let keyword. it will give error

let status = "pending ";
if (status === "pending") {
    let executiontime = 1000;
    console.log("execution time is ", executiontime);

}

console.log("execution time is ", executiontime); // we can not access executiontime variable outside if block because it is declared with let keyword. it is block scope variable. it will give error