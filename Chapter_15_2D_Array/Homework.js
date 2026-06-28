// *****

// ****

// ***

// **

// *



//Print reverse

let n=5;
for (i=n; i>=1; i--){
    let row =" ";
    for (j=1; j<=i ;j++){
        row += "*";
     

} console.log(row.trim())



}

//*
// ***
// *****

let rows = 3;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // Spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Stars
    for (let j = 1; j <= (2 * i - 1); j++) {
        pattern += "*";
    }

    console.log(pattern);
}