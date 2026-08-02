function getstring(user: string): string {
    return "swapna";
}
getstring("swapna");
function getfirstresult<T>(result: T[]){
    return result[0];
}
//getfirstresult([123]);
let firstresult = getfirstresult(["swapna", "kumar", "reddy"]);
console.log("firstresult", firstresult);