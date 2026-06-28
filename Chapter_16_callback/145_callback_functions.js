function cafe(item, willcallyouonceTableready){
    console.log("finding....1")
    console.log("finding....2")
    console.log("finding....3")
    console.log(item)
    callwhentableisready();
}
function callwhentableisready(){
    console.log("calling 1234567")
}
cafe ("burger",callwhentableisready)

cafe ("pizza", function(){
    console.log("calling 4566666")

})
cafe("momos", () =>{
    console.log("calling 333333")

});