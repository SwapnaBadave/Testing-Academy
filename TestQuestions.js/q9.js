// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
// Output
// "Smoke Suite | staging | build-42"
// Explanation:Builds staging smoke label
// Input
// buildJsBasicsRunLabel("Regression", "PROD", 7)
// Output
// "Regression | prod | build-7"
// Explanation:Builds prod regression label
// Visible Test Cases
// Case 1
// Input: buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)

// Expected: "Smoke Suite | staging | build-42"

// Case 2
// Input: buildJsBasicsRunLabel("Regression", "PROD", 7)

// Expected: "Regression | prod | build-7"
   

function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    suiteName = suiteName.trim(); // Remove leading/trailing whitespace from suiteName
    environment = environment.trim().toLowerCase(); // Remove leading/trailing whitespace and convert environment to lowercase
    return `${suiteName} | ${environment} | build-${buildNumber}`; // Construct and return the formatted label  
}