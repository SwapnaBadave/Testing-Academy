// Question 1 — HTTP Status Code Categorizer
// Problem: Given an HTTP status code, 
// print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid
// Sample Input/Output:
// Input: 404// Output: Client Error
// Input: 200
// Output: Success

let statusCode = 404; // Example input
if (statusCode >= 200 && statusCode <= 299) {
    console.log("Success");
} else if (statusCode >= 300 && statusCode <= 399) {
    console.log("Redirection");
} else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Client Error");
} else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Server Error");
} else {
    console.log("Invalid Status Code");
}   


// Question 2 — Test Case Pass/Fail Verdict
// Problem: Compare actual result with expected result and print test verdict.
// Sample Input/Output:
// expected = "Login Successful"
// actual   = "Login Successful"
// Output: ✅ Test Passed
// expected = "Login Successful"
// actual   = "Invalid Credentials"
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials
// https://emojipedia.org/check-mark-button

let expected = "Login Successful"; // Example expected result
let actual = "Invalid Credentials"; // Example actual result

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log(`❌ Test Failed — Expected: ${expected}, Got: ${actual}`);
}

// Question 3 — Bug Severity Classifier
// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score
// Sample Input/Output:
// Input: 9
// Output: Severity: Critical — Block release
// Input: 5
// Output: Severity: Medium
let impactScore = 5; // Example input
if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical — Block release");  
} else if (impactScore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
} else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Severity: Medium");
} else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid impact score");
}   

// Question 4 — Build Health Reporter
// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)
// Sample Input/Output:
// Input: 95
// Output: 🟡 Stable — Investigate failures
// Input: 65
// Output: 🔴 Broken Build — Block deployment
let passPercentage = 95; // Example input
if (passPercentage === 100) {
    console.log("🟢 Green Build");
} else if (passPercentage >= 90 && passPercentage <= 99) {
    console.log("🟡 Stable — Investigate failures");
} else if (passPercentage >= 70 && passPercentage <= 89) {
    console.log("🟠 Unstable");
} else {
    console.log("🔴 Broken Build — Block deployment");
}

// Question 5 — Login Lockout After Failed Attempts
// Problem: Track failed login attempts. Lock the account after 3 failed attempts.
// Sample Input/Output:
// Input: attempts = 2
// Output: 1 attempt left before lockout
// Input: attempts = 3
// Output: 🔒 Account Locked — Contact support
// Input: attempts = 0
// Output: Login successful
let attempts = 2; // Example input
if (attempts === 0) {
    console.log("Login successful");    
} else if (attempts > 0 && attempts < 3) {
    console.log(`${3 - attempts} attempt(s) left before lockout`);
} else if (attempts === 3) {
    console.log("🔒 Account Locked — Contact support");
} else {
    console.log("Invalid number of attempts");
}   