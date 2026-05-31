// Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score

let impactScore = 7
if (impactScore>=9 && impactScore<=10) {
    console.log("Critical");
}
else if (impactScore>=7 && impactScore<=8) {
    console.log("High");
}
else if (impactScore>=4 && impactScore<=6) {
    console.log("Medium");
}
else if (impactScore<=3 && impactScore>=1) {
    console.log("Low ");
}   
else {
    console.log("Invalid score");
}