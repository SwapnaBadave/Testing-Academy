let rajkumar_age= 18;
let raj_will_goa= rajkumar_age >= 18 ? "Yes" : "No";
console .log(raj_will_goa); // Output: "Yes"
 let a=10
 a+=10
    console.log(a) // Output: 20
    a=-10
    console.log(a) // Output: -10

    let actualstatus=200
    let expectedstatus=200
    let result= actualstatus === expectedstatus ? "Test Passed" : "Test Failed"
    console.log(result) // Output: "Test Passed"

    let environment = "staging";
    let url = environment === "production" ? "https://www.production.com" 
    : "https://www.staging.com";
    console.log(url) // Output: "https://www.staging.com"
    
    let isCI = true;
    let buildType = isCI ? "headless" : "headed";
    console.log(buildType) // Output: "headless"

    let responstime=850
    let sla=1000    
    let slastatus= responstime <= sla ? "Within SLA" : "SLA Breached";
    console.log(`response : ${slastatus} (${responstime}ms)`) // Output: "Within SLA"


//     Maximum number between two numbers, okay, by using the ternary operator 
// And maximum between the three numbers also by using turnery over 
// Upload your solution to the GitHub profile also. 

 let a = 5; 
 console.log(a++ + ++a - --a + a-- + ++a); 
 console.log(a);

let s=300
let t=150
let max= s > t ? s : t
console.log(`Maximum between ${s} and ${t} is: ${max}`) 
// Output: "Maximum between 300 and 150 is: 300"
console.log ("Maximum" + " between " + s + " and " + t + " is: " + max)


let s=300
let t=150
let u=250
let max= s > t && s > u ? s : t > s && t > u ? t : u 
console.log(`Maximum between ${s}, ${t} and ${u} is: ${max}`)
