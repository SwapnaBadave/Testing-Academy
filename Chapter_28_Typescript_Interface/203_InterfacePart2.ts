interface APIresponse{
    body: string;
    headers?: object;
    responsetime?: number; //? question mark represent optional
}

let response: APIresponse = {
    body: "API response got successfully"
};