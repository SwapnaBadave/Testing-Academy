function retry(testName,maxretries=3, delay=1000){
    console.log(`Running test ${testName} 
        with max retries ${maxretries} and delay ${delay}`);
}
retry("login test"); 
retry("registration test", 5,2000);  


// if we want to set default value for maxretries and delay then we can do it like this
function retry(testName, maxretries=3, delay=1000){
    console.log(`Running test ${testName} 
        with max retries ${maxretries} and delay ${delay}`);
}