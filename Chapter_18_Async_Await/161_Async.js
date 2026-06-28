async function testapi() {
    try {
        let result =await Promise.reject("reject 503");
    }
    catch (erorr){
    console.log("error", erorr);
    }
    finally {
        console.log("clean up")
    }
}
testapi();

