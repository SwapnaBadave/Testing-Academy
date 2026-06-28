function outer(){
    let message= "Hello";
    console.log("outer called");
    function inner(){
        console .log(message)

    }
    return inner;

}
let fun_inner=outer();
fun_inner();

