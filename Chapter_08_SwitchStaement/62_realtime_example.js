//used while working with API testing 

let statusCode= 200;
switch(statusCode){
    case 200:   
        console.log("Success");
        break;
    case 404:
        console.log("Not Found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown Status Code");
}