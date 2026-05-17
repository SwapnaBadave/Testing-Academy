// All Number Types Supported in JavaScript

// 1. Integer Numbers
let integerNum = 42;
console.log("Integer:", integerNum, typeof integerNum);

// 2. Floating-point Numbers (Decimal)
let floatNum = 3.14;
console.log("Float:", floatNum, typeof floatNum);

// 3. Scientific Notation (Exponential)
let scientificNum = 1.5e2; // 1.5 * 10^2 = 150
let scientificSmall = 1e-3; // 1 * 10^-3 = 0.001
console.log("Scientific notation:", scientificNum, scientificSmall);

// 4. Hexadecimal Numbers (base 16) - prefix with 0x
let hexNum = 0xFF; // 255 in decimal
let hexNum2 = 0x10; // 16 in decimal
console.log("Hexadecimal (0xFF):", hexNum); // 255
console.log("Hexadecimal (0x10):", hexNum2); // 16

// 5. Octal Numbers (base 8) - prefix with 0o
let octalNum = 0o10; // 8 in decimal
let octalNum2 = 0o77; // 63 in decimal
console.log("Octal (0o10):", octalNum); // 8
console.log("Octal (0o77):", octalNum2); // 63

// 6. Binary Numbers (base 2) - prefix with 0b
let binaryNum = 0b1010; // 10 in decimal
let binaryNum2 = 0b11111111; // 255 in decimal
console.log("Binary (0b1010):", binaryNum); // 10
console.log("Binary (0b11111111):", binaryNum2); // 255

// 7. Negative Numbers
let negativeNum = -42;
let negativeFloat = -3.14;
console.log("Negative numbers:", negativeNum, negativeFloat);

// 8. Special Number Values

// Infinity - represents a number larger than the largest representable number
let positiveInfinity = Infinity;
let calculatedInfinity = 1 / 0; // results in Infinity
console.log("Positive Infinity:", positiveInfinity, calculatedInfinity);

// Negative Infinity
let negativeInfinity = -Infinity;
let negativeCalculated = -1 / 0; // results in -Infinity
console.log("Negative Infinity:", negativeInfinity, negativeCalculated);

// NaN (Not-a-Number) - result of invalid mathematical operations
let nan = NaN;
let invalidOperation = 0 / 0; // NaN
let stringToNumber = Number("hello"); // NaN
console.log("NaN:", nan, invalidOperation, stringToNumber);
console.log("typeof NaN:", typeof NaN); // "number" (quirk!)

// 9. Number Constants and Properties
console.log("\nNumber Constants:");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // largest possible number
console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // smallest positive number
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 2^53 - 1
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -(2^53 - 1)
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("Number.NaN:", Number.NaN);

// 10. BigInt - for very large integers beyond MAX_SAFE_INTEGER
let bigInt1 = 9007199254740991n; // MAX_SAFE_INTEGER as BigInt
let bigInt2 = BigInt("9007199254740992"); // constructor method
console.log("\nBigInt:");
console.log("BigInt literal:", bigInt1, typeof bigInt1);
console.log("BigInt constructor:", bigInt2, typeof bigInt2);
console.log("BigInt operation:", bigInt1 + 1n);

// Note: Cannot mix BigInt and regular numbers in operations
// bigInt1 + 10; // TypeError: Cannot mix BigInt and other types

// 11. Zero and Negative Zero
let positiveZero = 0;
let negativeZero = -0;
console.log("\nZero values:");
console.log("Positive Zero:", positiveZero);
console.log("Negative Zero:", negativeZero);
console.log("Are they equal?", positiveZero === negativeZero); // true
console.log("Object.is to distinguish:", Object.is(positiveZero, negativeZero)); // false

// 12. Number Methods for Checking Values
console.log("\nNumber checking methods:");
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (more reliable)
console.log("isFinite(100):", isFinite(100)); // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("Number.isInteger(42.5):", Number.isInteger(42.5)); // false
console.log("Number.isInteger(42):", Number.isInteger(42)); // true
console.log("Number.isSafeInteger(100):", Number.isSafeInteger(100)); // true
