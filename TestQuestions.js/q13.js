// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// checkJsBasicsReadinessGate(true, true, true)
// Output
// "READY"
// Explanation:All flags true is ready
// Input
// checkJsBasicsReadinessGate(true, false, true)
// Output
// "BLOCKED"
// Explanation:Missing practice is blocked
// Visible Test Cases
// Case 1
// Input: checkJsBasicsReadinessGate(true, true, true)

// Expected: "READY"

// Case 2
// Input: checkJsBasicsReadinessGate(true, false, true)

// Expected: "BLOCKED"

// Case 3
// Input: checkJsBasicsReadinessGate("true", true, true)

// Expected: "BLOCKED"

function checkJsBasicsReadinessGate(asSetup, hasPractice, hasNotes) {
    if (asSetup === true && hasPractice === true && hasNotes === true) {
        return "READY";
    } else {
        return "BLOCKED";
    }   
}