// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})
// Output
// {"retries":3,"env":"dev"}
// Explanation:Override retries wins
// Input
// mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})
// Output
// {"env":"qa","timeout":5000,"retries":0}
// Explanation:Adds missing retries default
// Visible Test Cases
// Case 1
// Input: mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})

// Expected: {"retries":3,"env":"dev"}

// Case 2
// Input: mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})

// Expected: {"env":"qa","timeout":5000,"retries":0}

// Case 3
// Input: mergeJsBasicsConfig({"env":"dev","retries":2}, {"env":"stage"})

// Expected: {"env":"stage","retries":2}
function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    const mergedConfig = { ...defaultConfig, ...overrideConfig };   
    if (!mergedConfig.hasOwnProperty("retries")) {
        mergedConfig.retries = 0; // Set default retries to 0 if not provided
    }
    return mergedConfig;
}

// how this works for above condtions
// 1. For {"retries":1,"env":"dev"}, {"retries":3}:
    // - Merged config: {"retries":3,"env":"dev"} (override retries wins)
    // - No missing retries, so no default added