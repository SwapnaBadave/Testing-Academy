// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"])
// Output
// {"total":3,"passed":1,"failed":1,"skipped":1}
// Explanation:Summarizes mixed results
// Input
// summarizeJsBasicsResults([])
// Output
// {"total":0,"passed":0,"failed":0,"skipped":0}
// Explanation:Summarizes empty list
// Visible Test Cases
// Case 1
// Input: summarizeJsBasicsResults(["login-pass","api-fail","profile-skip"])

// Expected: {"total":3,"passed":1,"failed":1,"skipped":1}

// Case 2
// Input: summarizeJsBasicsResults([])

// Expected: {"total":0,"passed":0,"failed":0,"skipped":0}

// Case 3
// Input: summarizeJsBasicsResults(["a-pass","b-pass"])

// Expected: {"total":2,"passed":2,"failed":0,"skipped":0}

function summarizeJsBasicsResults(results) {
    const summary = {
        total: results.length,
        passed: 0,
        failed: 0,
        skipped: 0
    };      
    for (let result of results) {
        result = result.trim().toLowerCase();
        if (result.includes("pass")) {
            summary.passed++;
        } else if (result.includes("fail")) {
            summary.failed++;
        } else if (result.includes("skip")) {
            summary.skipped++;
        }
    }
    return summary;
}

// how this works for above condtions
// 1. For ["login-pass","api-fail","profile-skip"]:
    // - total: 3 (length of the input array)
    // - passed: 1 (contains "pass")
    // - failed: 1 (contains "fail")
    // - skipped: 1 (contains "skip")