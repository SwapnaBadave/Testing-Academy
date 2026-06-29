class testcase{
    execute(){
        console.log("running generic test")
    }
}
class unittest extends testcase{
    execute(){
        console.log("running unit test : checking one function")
    }
}
 class apitest extends testcase{
    execute(){
        console.log("running API Test :sending API req")
    }
 }
  class E2E extends testcase{
    execute(){
        console.log("running E2E Test: opneing browser")
    }
  }
  let tests= [new unittest(), new apitest(), new E2E()];

  tests.forEach(function(test){
    test.execute()
  })