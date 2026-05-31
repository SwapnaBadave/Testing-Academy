// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
// Output
// ["1. Install Node - TODO","2. Create GitHub repo - TODO"]
// Explanation:Builds numbered checklist
// Input
// buildJsBasicsChecklist(["Practice switch"," ","Push code"])
// Output
// ["1. Practice switch - TODO","2. Push code - TODO"]
// Explanation:Skips blank checklist items
// Visible Test Cases
// Case 1
// Input: buildJsBasicsChecklist(["Install Node","Create GitHub repo"])

// Expected: ["1. Install Node - TODO","2. Create GitHub repo - TODO"]

// Case 2
// Input: buildJsBasicsChecklist(["Practice switch"," ","Push code"])

// Expected: ["1. Practice switch - TODO","2. Push code - TODO"]

function buildJsBasicsChecklist(items) {
    const checklist = [];
    let count = 1;  
    for (let item of items) {




        item = item.trim();
        if (item) { // Only add non-empty items
            checklist.push(`${count}. ${item} - TODO`);
            count++;
        }   
    }
    return checklist;
}   