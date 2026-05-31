// Question 4 — Build Health Reporter

// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)

// let percentage= 95;
// if (percentage===100) {
//     console.log("Green Build");
// } else if (percentage>=90 && percentage<=99) {
//     console.log("Stable (investigate failures)");
// }else if (percentage>=70 && percentage<=89) {
//     console.log("Unstable");
// }else if (percentage<70) {
//     console.log("Broken Build (block deployment)");
// }  



let percentage= 65;
if (percentage===100) {
    console.log("Green Build");
} else if (percentage>=90 && percentage<=99) {
    console.log("Stable (investigate failures)");
}else if (percentage>=70 && percentage<=89) {
    console.log("Unstable");
}else if (percentage<70) {
    console.log("Broken Build (block deployment)");
}  