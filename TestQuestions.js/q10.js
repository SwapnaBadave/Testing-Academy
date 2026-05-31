// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}])
// Output
// "Login crash"
// Explanation:Finds first critical item
// Input
// findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])
// Output
// "No critical bug"
// Explanation:Returns fallback when no critical bug exists
// Visible Test Cases
// Case 1
// Input: findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}])

// Expected: "Login crash"

// Case 2
// Input: findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])

// Expected: "No critical bug"

function findFirstCriticalJsBasicsBug(bugs) {
    for (let bug of bugs) {
        if (bug.severity.toLowerCase() === "critical") {
            return bug.title; // Return the title of the first critical bug found
        }
    }   return "No critical bug"; // Return fallback message if no critical bug is found        
}

// how this works for above condtions
// 1. For [{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}]:
    // - The first bug has severity "low", so it is skipped.
    // - The second bug has severity "critical", so its title "Login crash" is returned immediately.