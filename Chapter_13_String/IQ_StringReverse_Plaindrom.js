// Reverse String
//Given a string , Reverse it and print true if they are same.

//Madam is palindrome, pramod is not

let str = "Madam";
let rev = "";

// Reverse the string
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
    console.log(rev)
}

// Check if palindrome (case-insensitive)
if (str.toLowerCase() === rev.toLowerCase()) {
    console.log(true);
} else {
    console.log(false);
}


let str = "Pramod";
let rev = "";

// Reverse the string
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
    console.log(rev)
}

// Check if palindrome (case-insensitive)
if (str.toLowerCase() === rev.toLowerCase()) {
    console.log(true);
} else {
    console.log(false);
}