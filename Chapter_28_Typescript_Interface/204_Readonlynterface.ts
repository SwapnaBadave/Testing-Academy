interface APIresponse{
    readonly statuscode: number;
    body: string;
    headers?: object;
    responsetime?: number; //? question mark represent optional
}

//readonly means we cannot modify 

let response: APIresponse = {
     statuscode : 200,
    body: "API response got successfully",

};
console.log("status", response.statuscode)
console.log("body", response.body)
console.log("header", response.headers)