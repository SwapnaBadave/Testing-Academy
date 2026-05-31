        // Input: classifyJsBasicsScore(95)

        // Expected: "EXCELLENT"
function classifyJsBasicsScore(score) {
    if (score >= 90) {
        return "EXCELLENT";
    } else if (score >= 75) {
        return "GOOD";
    } else if (score >= 60) {
        return "FAIR";
    } else {
        return "POOR";
    }           
}
