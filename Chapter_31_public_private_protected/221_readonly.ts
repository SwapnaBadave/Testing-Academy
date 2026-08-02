class palywrightconfig{
    readonly baseurl: string;
    readonly timeout: number;
    readonly headless: boolean;
    constructor(baseurl: string, timeout: number, headless: boolean) {
        this.baseurl = baseurl;
        this.timeout = timeout;
        this.headless = headless;
    }
    showconfig(): void {
        console.log("baseurl", this.baseurl);
        console.log("timeout", this.timeout);
        console.log("headless", this.headless);
    }
}
let config: palywrightconfig = new palywrightconfig("https://example.com", 5000, true);
config.showconfig();