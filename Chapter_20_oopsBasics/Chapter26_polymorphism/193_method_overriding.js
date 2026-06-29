class baseTest {
    setup(){
        console.log("base: open broswer")
    }
}
 class APITest extends baseTest{
    // setup() {
    //     console.log("API Test: open browser") //if this
    //     //code not available then it will call parent 
    // }
 }

  let test =new APITest();
  test.setup();
