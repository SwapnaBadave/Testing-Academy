// Input Format
// Function arguments as shown in the visible examples.

// Output Format
// Return the requested value directly. Do not print to console.

// Examples
// Input
// filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])
// Output
// ["node","v8"]
// Explanation:Normalizes known terms
// Input
// filterSupportedJsBasicsTopics(["node","runtime","node"])
// Output
// ["node"]
// Explanation:Removes duplicates
// Visible Test Cases
// Case 1
// Input: filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])

// Expected: ["node","v8"]

// Case 2
// Input: filterSupportedJsBasicsTopics(["node","runtime","node"])

// Expected: ["node"]

// Case 3
// Input: filterSupportedJsBasicsTopics(["npm","node","v8"])

// Expected: ["npm","node","v8"]

function filterSupportedJsBasicsTopics(topics) {
    const supportedTopics = new Set(["node", "v8", "npm"]); 
    const normalizedTopics = new Set();     
    for (let topic of topics) {
        topic = topic.trim().toLowerCase();
        if (supportedTopics.has(topic)) {
            normalizedTopics.add(topic);
        }
    }
    return Array.from(normalizedTopics);
        }   