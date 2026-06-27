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

// in operator
console.log(0 in tests); // it will check if the index 0 is present in the array or not
console.log(3 in tests); // it will check if the index 3 is present in the array or not 