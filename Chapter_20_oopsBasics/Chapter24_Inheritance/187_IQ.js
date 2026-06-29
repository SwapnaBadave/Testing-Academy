class bastest{
setup(){
    console.log("base: open the browser")
}
teardown(){
    
        console.log("base: close the browser")
        
    } 

}
class UItest extends bastest{
    setup(){
        super.setup();
        console.log("UI: Maximse browser")
    }
    teardown(){
        console.log("UI: take SCreenshot")
        super.teardown();

    }
}
let test= new UItest();
test.setup();
