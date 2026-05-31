// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])
// Output
// 2
// Explanation:Counts mixed pass/fail data
// Input
// countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])
// Output
// 2
// Explanation:Handles uppercase PASS
// Visible Test Cases
// Case 1
// Input: countPassingJsBasicsChecks(["login-pass","api-fail","logout-pass"])

// Expected: 2

// Case 2
// Input: countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"])

// Expected: 2

// Case 3
// Input: countPassingJsBasicsChecks(["one-fail","two-skip"])

// Expected: 0

function countPassingJsBasicsChecks(results) {
    let passCount = 0;  //  Initialize a counter for passing checks
    for (let check of results) {// Iterate through each check in the results array
        check = check.trim().toLowerCase();// Normalize the check string by trimming and converting to lowercase
        if (check.includes("pass")) {// If the normalized check string includes "pass", increment the passCount
            passCount++;// Increment the pass count
        }
    }
    return passCount;// Return the total count of passing checks
}