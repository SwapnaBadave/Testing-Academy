enum httpscode{
    get="GET",
    post="POST",
    put="PUT",  
    delete="DELETE"
}
function sendRequest(endpoint:string, method:httpscode): void{
    console.log("url", `${endpoint} -> 200 OK`)
    
}
sendRequest("https://example.com/api/users", httpscode.get)
sendRequest("https://example.com/api/users", httpscode.post)
sendRequest("https://example.com/api/users", httpscode.put)
sendRequest("https://example.com/api/users", httpscode.delete)