function openbrowser(){
    return new Promise(function (resolve){
        //code to open brow
        console.log("open browser")
    });
}

function LoginPage(){
    return new Promise(function (resolve){
        //code to open brow
        console.log("Login on the page")
    });

}

function ClickButton(){
    return new Promise(function (resolve){
        //code to open brow
        console.log("Logged in successfully")
    });

}
function EnterCred(){
    return new Promise(function (resolve){
        //code to open brow
        console.log("Logged in successfully")
    });

}
openbrowser()
.then(function(AA){
    console.log("step 1 :", AA)
    return LoginPage()
    
}).then(function(AA){
    console.log("step 2 :", AA)
    return ClickButton()
}).then(function(AA){
    console.log("step 3 :",AA)
    return EnterCred()
});
