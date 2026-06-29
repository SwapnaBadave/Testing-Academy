class basepage{
    verify(){
       console.log("verifying the base page")

    }}
    class loginpage extends basepage{
        verify(){
console.log("verifying the base page");
console.log("verifying password field exist");
console.log("verifying login button visible");
        }
        
      }
class dashboard extends basepage{
      verify(){
        console.log("verify welcome message ")
        console.log("verify sidebar menu loaded")
      }}
      let pages= [new loginpage(), new dashboard()]
      pages.forEach(function(page){
        page.verify();
        console.log("......")
      })