//pure function : 
// A pure function is a function that, given the same input, 
// will always return the same output and 
// does not have any observable side effects.

function calculateassrate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}
console.log(calculateassrate(10, 7)); // 70.00

//Impure function :
// An impure function is a function that, given the same input, 
// may return different outputs or 
// has observable side effects.
function isPassing(score){
    return score >= threshold; //depends on external variable
    // threshold
}

let threshold = 70;
console.log(isPassing(threshold)); // true


//pect	Pure	Impure
// Consistency	Same input always = same output	Same input may = different outputs
// Side Effects	None	Has observable side effects
// Testability	Easy to test	Difficult to test
// Predictability	Very predictable	Unpredictable
// Debugging	Easier	Complex