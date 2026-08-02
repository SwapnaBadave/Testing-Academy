interface testconfig{
    browser: string;
    headless: boolean;  
    baseurl: string;    
    timeout: number;    
    retrycount: number;

}
let ciConfig: testconfig = {
    browser: "chrome",
    headless: true,
    baseurl: "https://ci.example.com",
    timeout: 30000,
    retrycount: 2,
}
let localConfig: testconfig = {
    browser: "firefox",
    headless: false,
    baseurl: "https://localhost:3000",
    timeout: 60000,
    retrycount: 0,
}
console.log("CI Config:", ciConfig.browser ,"| timeout :",ciConfig.timeout);
console.log("Local Config:", localConfig.browser ,"| timeout :",localConfig.timeout);
