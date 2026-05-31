// // // Input Format
// // Function arguments as shown in the visible examples.

// // Output Format
// // Return the requested value directly. Do not print to console.

// Case 1
// Input: isValidJsBasicsIdentifier("loginButton")

// Expected: true

// Case 2
// Input: isValidJsBasicsIdentifier("$submit")

// Expected: true

// Case 3
// Input: isValidJsBasicsIdentifier("1login")

// Expected: false

// Case 4
// Input: isValidJsBasicsIdentifier("let")

// Expected: false

function isValidJsBasicsIdentifier(identifier) {

    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/; 
    return regex.test(identifier);
}

// how this works for above condtions 
// 1. /^[a-zA-Z_$][a-zA-Z0-9_$]*$/ matches strings that start with a letter, underscore, or dollar sign, followed by any number of letters, digits, underscores, or dollar signs.
// 2. For "loginButton": Starts with 'l' (a letter), followed by letters and numbers - valid.
// 3. For "$submit": Starts with '$' (a valid starting character), followed by letters - valid.
// 4. For "1login": Starts with '1' (a digit) - invalid.
// 5. For "let": Starts with 'l' (a letter), but "let" is a reserved keyword in JavaScript - invalid.