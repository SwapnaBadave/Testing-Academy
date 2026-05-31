if ("hello") console.log("string is truthy");  
if(42) console.log("number is truthy");
if ({}) console.log("object is truthy");
if ([]) console.log("array is truthy");
if (null) console.log("null is truthy");
if (undefined) console.log("undefined is truthy");
if (0) console.log("0 is truthy");
if ("") console.log("empty string is truthy");// In JavaScript, the following values are considered falsy: false, 0, "", null, undefined, and NaN.
if(NaN) console.log("NaN is truthy");// In JavaScript, the following values are considered falsy: false, 0, "", null, undefined, and NaN.

let name= undefined
if (name) console.log("hi");
else console.log("bye");  