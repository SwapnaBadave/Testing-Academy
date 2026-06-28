const ENV={
    url : " https//staging.myapp.com",
    timeout : 3000,
    retries: 3,
    browser: "chrome"
}

const Expected_response ={
status =200,
body:{
    user: {role: "admin", active: true}
}
}