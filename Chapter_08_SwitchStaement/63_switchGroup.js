let browser= "chrome";
switch(browser){
    case "chrome":  
    case "edge":
    case "firefox":
        console.log("we are supporting the browser " + browser);    
        break;

    default:
        console.log("we are not supporting the browser " + browser);
}