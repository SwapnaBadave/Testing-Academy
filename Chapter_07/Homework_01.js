// Question 1 — HTTP Status Code Categorizer

// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid

// let statuscode=400
// if (statuscode>=200 && statuscode<=299) {
//     console.log("Success");
// } else if (statuscode>=300 && statuscode<=399) {
//     console.log("Redirection");
// } else if (statuscode>=400 && statuscode<=499) {
//     console.log("Client Error");
// } else if (statuscode>=500 && statuscode<=599) {
//     console.log("Server Error");
// } else {
//     console.log("Invalid");
// }


// let statuscode=300
// if (statuscode>=200 && statuscode<=299) {
//     console.log("Success");
// } else if (statuscode>=300 && statuscode<=399) {
//     console.log("Redirection");
// } else if (statuscode>=400 && statuscode<=499) {
//     console.log("Client Error");
// } else if (statuscode>=500 && statuscode<=599) {
//     console.log("Server Error");
// } else {
//     console.log("Invalid");
// }

let statuscode=600
if (statuscode>=200 && statuscode<=299) {
    console.log("Success");
} else if (statuscode>=300 && statuscode<=399) {
    console.log("Redirection");
} else if (statuscode>=400 && statuscode<=499) {
    console.log("Client Error");
} else if (statuscode>=500 && statuscode<=599) {
    console.log("Server Error");
} else {
    console.log("Invalid");
}