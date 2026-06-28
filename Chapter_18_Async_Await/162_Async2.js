function gettoken(){
    return Promise.resolve("abc123")
}

async function run(){
    let token =await gettoken();
    
}