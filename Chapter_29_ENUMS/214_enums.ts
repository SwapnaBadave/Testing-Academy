enum browser{
    chrome="CHROME",
    firefox="FIREFOX",
    edge="EDGE",
    safari="SAFARI"
}
function launchBrowser(br:browser): void {
    switch(br){
        case browser.chrome:
            console.log("launching browser", "chrome v120")
            break
        case browser.firefox:
            console.log("launching browser", "firefox v120")
            break
        case browser.edge:
            console.log("launching browser", "edge v120")
            break
        case browser.safari:
            console.log("launching browser", "safari v120")
            break
    }
}  
launchBrowser(browser.chrome)  
launchBrowser(browser.firefox)  
launchBrowser(browser.edge)  
launchBrowser(browser.safari)