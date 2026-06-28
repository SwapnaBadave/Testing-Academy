function print(){
    console.log("normal function")
}
function placeorder(clipboarditem, callback){
    console.log("hi your order is placed")
    callback();

}
// first way 
placeorder("burger", function(){
    console.log (" hi how are you")

})
// second way 
//placeorder ("pizza", print)