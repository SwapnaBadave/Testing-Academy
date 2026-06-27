// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// calculateJsBasicsWeightedScore(5, 2, 1)
// Output
// 8
// Explanation:Calculates mixed score
// Input
// calculateJsBasicsWeightedScore(3, 0, 0)
// Output
// 6
// Explanation:All pass gives double points
// Visible Test Cases
// Case 1
// Input: calculateJsBasicsWeightedScore(5, 2, 1)

// Expected: 8

// Case 2
// Input: calculateJsBasicsWeightedScore(3, 0, 0)

// Expected: 6

// Case 3
// Input: calculateJsBasicsWeightedScore(1, 4, 3)

// Expected: -2

function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    if (passed > 0 && failed === 0 && skipped === 0) {
        return passed * 2;// All pass gives double points
    } else {
        return passed - failed - skipped;
    }   
}