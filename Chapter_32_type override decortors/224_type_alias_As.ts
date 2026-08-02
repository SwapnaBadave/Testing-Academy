interface userresponse {
    status: number;
    body: {
        user: string;
        email: string;
    };
}

let rowresponse: unknown = {
    status: 200,
    body: {
        user: "swapna",
        email: "abc@gmail.com"
    }
};

let response: userresponse = rowresponse as userresponse;
console.log("status", response.status);
console.log("body", response.body);