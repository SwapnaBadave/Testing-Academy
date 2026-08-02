class basetest{
    setup(): void{
        console.log("setting up test");
    }
    testdown(): void{
        console.log("tearing down test");
    }
}
class logintest extends basetest{
    override setup(): void{
        console.log("setting up login test");
    }
}
class apitest extends basetest{
    override testdown(): void{
        console.log("setting up api test");
    } 
}
let test1: basetest = new logintest();
test1.setup();
test1.testdown();
let test2: basetest = new apitest();
test2.setup();
test2.testdown();