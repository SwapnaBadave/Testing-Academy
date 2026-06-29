class bastest{
setup(){
    console.log("base: open the browser")
}

}
class APItest extends bastest{
    setup(){
        console.log("APITest: open the browser")
        
    } }
    let test= new APItest();
    test.setup();
