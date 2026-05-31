// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// createUniqueJsBasicsTags([" Smoke ","smoke","Regression"])
// Output
// ["smoke","regression"]
// Explanation:Normalizes and dedupes tags
// Input
// createUniqueJsBasicsTags([""," API "," ","api"])
// Output
// ["api"]
// Explanation:Removes blank values
// Visible Test Cases
// Case 1
// Input: createUniqueJsBasicsTags([" Smoke ","smoke","Regression"])

// Expected: ["smoke","regression"]

// Case 2
// Input: createUniqueJsBasicsTags([""," API "," ","api"])

// Expected: ["api"]

function createUniqueJsBasicsTags(tags) {
    const uniqueTags = new Set();       
    for (let tag of tags) {
        tag = tag.trim().toLowerCase();
        if (tag) { // Only add non-empty tags
            uniqueTags.add(tag);
        }
    }
    return Array.from(uniqueTags);
}
