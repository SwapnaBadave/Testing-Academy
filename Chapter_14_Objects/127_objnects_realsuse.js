let config ={

}
config.browser= "chrome";
config.timeout= 4000;
config.testname= "login test"
console.log(config)

if (config.browser=== "chrome"){

    console.log("login test pass")
}else {
    console.log ("throw error")
}

let config2 = {
    browser= "firefox",
    timeout= 4000,
    testname= "login test"
}; // this method also we can use 
