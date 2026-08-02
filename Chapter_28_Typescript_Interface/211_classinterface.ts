interface executable{
    name: string;
    run(): void;
    getresult(): string;
}
class testcase implements executable{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    run(): void {
        console.log("running test case", this.name)
    }
    getresult(): string { 
        return "Pass";
    }}
    let test1: executable = new testcase("verify login page");
    test1.run();
