let responsecode: number[]=[200,201,300,404,500]
function getFailedResponseCode(code: number[]): number[] {
    return code.filter(function(code: number): boolean {
        return code >= 400;
    });
}
console.log("all codes", responsecode)
console.log("failed codes",getFailedResponseCode(responsecode))