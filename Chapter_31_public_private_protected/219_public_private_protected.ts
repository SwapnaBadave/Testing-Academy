class ApiClient {
    private apikey: string = "1234567890";
    private url: string;

    constructor(baseurl: string = "https://example.com/api") {
        this.url = baseurl;
        this.apikey = "1234567890";
    }

    public get(url: string): void {
        console.log("GET request to", url);
        this.logRequest(url);
    }

    protected logRequest(url: string): void {
        console.log("Logging request to", url);
    }
}
