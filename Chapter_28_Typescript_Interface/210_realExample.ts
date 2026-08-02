interface Basepage{
    url: string;
    title: string;
}
interface loginpage extends Basepage{
    
}
interface homepage extends Basepage{
}
let loginpage1: loginpage = {
    url: "https://example.com/login",
    title: "Login Page"
}
let homepage1: homepage = {
    url: "https://example.com/home",
    title: "Home Page"
}
console.log("loginpage", loginpage1)
console.log("homepage", homepage1)