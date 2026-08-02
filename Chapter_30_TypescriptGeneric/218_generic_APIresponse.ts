function wrapresponse<T>(statuscode: number, data: T): { statuscode: number, data: T } {
    return {
        statuscode: statuscode,
        data: data
    }
}
let response1 = wrapresponse<boolean>(200, true);
console.log( response1)