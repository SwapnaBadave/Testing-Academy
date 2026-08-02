class father{
    home():void{
        console.log("father home")
    }
}
class son extends father{
    override home():void{
        console.log("son home")
    }
}
let test: father = new son();
test.home();