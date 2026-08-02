abstract class basetest {
protected testname: string;
constructor(testname: string) {
    this.testname = testname;}
    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
}
class mytest extends basetest {
    setup(): void   {
        console.log("setting up test", this.testname);
    }
    execute(): void {
        console.log("executing test", this.testname);
    }
    teardown(): void {
        console.log("tearing down test", this.testname);
    }
   
    }
    let test: basetest = new mytest("verify login page");
    test.setup();
    test.execute();
    test.teardown();