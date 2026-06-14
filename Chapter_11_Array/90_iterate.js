let tests= ["login", "signup", "logout"];
for (let i=0; i<tests.length; i++){
    console.log(tests[i]);
}

console.log("**********");

//for ...of loop

for (const test of tests) {
    console.log(test);
}   

tests.forEach((test, index) => { // it will give the index and the element of the array
    console.log(test, index);
});