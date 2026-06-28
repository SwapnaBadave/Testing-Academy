let scores=[
[85,90,78],
[60,45,70],
[95,88,72]

];
let rowsums= scores.map(row=>row.reduce((a,b)=> a+b,0))
console.log(rowsums);

let suiteresults= [
["login-pass", "register-pass","logout-pass"],
["search-pass","filter-fail","sort-pass"],
["checkout-fail","payment-fail","confirm-pass"]
];
for (let i=0; i<suiteresults.length; i++){
    for (let j=0; j<suiteresults[i].length; j++){
        if (suiteresults[i][j].includes("fail")){
            console.log(suiteresults[i][j])
        }

    }

}