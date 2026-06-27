function Runtest (name, status, duration){ 
    return `${name}: status is ${status} and duration is ${duration}ms`; 
}
//console.log(Runtest("login", "pass", 300));
// it will return "login: status is pass and duration is 300ms"

const R= Runtest("login", "pass", 300); 
console.log(R); // it will return "login: status is pass and duration is 300ms"