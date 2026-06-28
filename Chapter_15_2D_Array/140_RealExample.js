let matrix=[
    ["login","pass",200],
    ["checkout", "fail",404],
    ["search","pass",180]
];

// how many tc are present : 3
//how many passed: 2 
//how many fail: 1

for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
    console.log()
}

for (let row of matrix){
    for (let cell of row){
        process.stdout.write(cell + " ");
    }
    console.log()
}