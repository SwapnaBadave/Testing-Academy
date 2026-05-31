// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])
// Output
// {"total":2,"passed":1,"failed":1,"failedCases":["checkout-fail"]}
// Explanation:Summarizes mixed matrix
// Input
// summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]])
// Output
// {"total":3,"passed":3,"failed":0,"failedCases":[]}
// Explanation:Summarizes all pass matrix
// Visible Test Cases
// Case 1
// Input: summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])

// Expected: {"total":2,"passed":1,"failed":1,"failedCases":["checkout-fail"]}

// Case 2
// Input: summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]])

// Expected: {"total":3,"passed":3,"failed":0,"failedCases":[]}


function summarizeJsBasicsMatrix(matrix) {  
    let total = 0;
    let passed = 0;
    let failed = 0;
    let failedCases = [];

    for (let row of matrix) {
        for (let testCase of row) {
            total++;
            if (testCase.endsWith("-pass")) {
                passed++;
            } else if (testCase.endsWith("-fail")) {
                failed++;
                failedCases.push(testCase);
            }
        }
    }

    return { total, passed, failed, failedCases };
}   