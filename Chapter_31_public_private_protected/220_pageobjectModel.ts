class basepage{
    protected baseurl: string;
    constructor(baseurl: string){
        this.baseurl = baseurl;
}
protected navigate(path: string): void {
    console.log("Navigating to", `${this.baseurl}${path}`);
}}
class loginpage extends basepage{
    constructor(){
        super("https://example.com");
    }
    login(user: string): void {
        this.navigate("/login");
        console.log("Logging in");
    }}
    let page: loginpage = new loginpage();
    page.login("swapna");