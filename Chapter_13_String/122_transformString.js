let str= "  Hello World!"
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.trim());
str.trimStart();
str.trimEnd();

let msg= "test: Fail, retry: Fail"
console.log(msg.replace("Fail", "pass"));
console.log(msg.replaceAll("Fail", "pass"))
console.log(msg.replace(/FAIL/g, "pass"))

//concatination
"hello" + " " + "world"
"hello".concat(" ", "world");
`${"hello"} ${"world"}`

let url= "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"))
let r= "pass,fail,skip".split(",");
console.log(r)
let rr="test_login_pass".split("_").join(" ");
console.log(rr)
let parts =["2024","03","07"]
let date= parts.join("_")
console.log(date)