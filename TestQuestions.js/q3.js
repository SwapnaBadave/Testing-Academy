// // Rules:
// // - Trim leading and trailing spaces.
// // - Convert text to lowercase.
// // - Replace non-alphanumeric groups with a single hyphen.
// // - Prefix the result with "js-basic-".

// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// normalizeJsBasicsLabel(" Login Button ")
// Output
// "js-basic-login-button"
// Explanation:Trims and slugifies a normal label
// Input
// normalizeJsBasicsLabel("User Profile: Edit!")
// Output
// "js-basic-user-profile-edit"
function normalizeJsBasicsLabel(label) {
    // Step 1: Trim leading and trailing spaces
    label = label.trim();   
    // Step 2: Convert text to lowercase
    label = label.toLowerCase();
    // Step 3: Replace non-alphanumeric groups with a single hyphen
    label = label.replace(/[^a-z0-9]+/g, '-');
    // Step 4: Prefix the result with "js-basic-"
    label = "js-basic-" + label;
    return label;
}

// how this works for above condtions
// 1. For " Login Button ": 
//    - After trimming: "Login Button"
//    - After converting to lowercase: "login button"
//    - After replacing non-alphanumeric groups: "login-button"
//    - Final result: "js-basic-login-button"

// what about other conditions?
// 2. For "User Profile: Edit!":
//    - After trimming: "User Profile: Edit!"
//    - After converting to lowercase: "user profile: edit!"
//    - After replacing non-alphanumeric groups: "user-profile-edit"
//    - Final result: "js-basic-user-profile-edit"


// Case 1
// Input: normalizeJsBasicsLabel(" Login Button ")

// Expected: "js-basic-login-button"

// Case 2
// Input: normalizeJsBasicsLabel("User Profile: Edit!")

// Expected: "js-basic-user-profile-edit"

// Case 3
// Input: normalizeJsBasicsLabel("---Search@@Box---")

// Expected: "js-basic-search-box"

// Case 4
// Input: normalizeJsBasicsLabel(" ")

// Expected: "js-basic"

function normalizeJsBasicsLabel(label) {
    // Step 1: Trim leading and trailing spaces
    label = label.trim();   
    // Step 2: Convert text to lowercase
    label = label.toLowerCase();
    // Step 3: Replace non-alphanumeric groups with a single hyphen
    label = label.replace(/[^a-z0-9]+/g, '-');
    // Step 4: Prefix the result with "js-basic-"
    label = "js-basic-" + label;
    return label;
}

// how this works for all cases:
// 1. For " Login Button ":
//    - After trimming: "Login Button"
//    - After converting to lowercase: "login button"
//    - After replacing non-alphanumeric groups: "login-button"
//    - Final result: "js-basic-login-button"   
// 2. For "User Profile: Edit!":    
//    - After trimming: "User Profile: Edit!"
//    - After converting to lowercase: "user profile: edit!"
//    - After replacing non-alphanumeric groups: "user-profile-edit"
//    - Final result: "js-basic-user-profile-edit"
// 3. For "---Search@@Box---":
//    - After trimming: "---Search@@Box---"
//    - After converting to lowercase: "---search@@box---"
//    - After replacing non-alphanumeric groups: "search-box"
//    - Final result: "js-basic-search-box"
// 4. For " ":
//    - After trimming: ""
//    - After converting to lowercase: ""
//    - After replacing non-alphanumeric groups: ""
//    - Final result: "js-basic-"


