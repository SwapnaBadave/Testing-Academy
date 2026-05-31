// // 
// Case 1
// Input: getJsBasicsKeywordMeaning("NODE")

// Expected: "runtime"

// Case 2
// Input: getJsBasicsKeywordMeaning(" v8 ")

// Expected: "engine"

// Case 3
// Input: getJsBasicsKeywordMeaning("npm")

// Expected: "package-manager"

// Case 4
// Input: getJsBasicsKeywordMeaning("not-a-topic")

// Expected: "unknown"
function getJsBasicsKeywordMeaning(keyword) {
    keyword = keyword.trim().toLowerCase(); // Step 1: Trim leading and trailing spaces, and convert to lowercase
    const meanings = {// Step 2: Define a mapping of keywords to their meanings
        "node": "runtime",// Step 3: Lookup the keyword in the meanings object and return the corresponding value, or "unknown" if not found
        "v8": "engine",//  Step 4: Return the result
        "npm": "package-manager"// Step 4: Return the result
    };
    return meanings[keyword] || "unknown";// Step 4: Return the result  
}

// how this works for all cases:
// 1. For "NODE":
//    - After trimming and converting to lowercase: "node"
//    - Lookup in meanings object: "runtime"
//    - Final result: "runtime"