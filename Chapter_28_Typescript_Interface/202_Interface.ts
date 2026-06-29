interface testcase{
    id: number;
    name: string;
    status: string
    duration: number;
}

let test1: testcase= {
    id: 10,
    name: "login the applicaiton",
    status: "Pass",
    duration: 1000,
}

// let test2: testcase= {
//     id: 3,
//     name: "not able to login application",
//     status: "failed"
//     duration: 2000,
// }

console.log("TC"+ test1.id + "-" + test1.name + "-"  + test1.status)