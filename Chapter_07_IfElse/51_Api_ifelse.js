let statuscode=201;
if (statuscode===200){
    console.log("Api call successful");
}   else if (statuscode===400){
    console.log("Bad request");
}   else if (statuscode===500){
    console.log("Internal server error");
}   else {
    console.log("Unknown status code");
}       