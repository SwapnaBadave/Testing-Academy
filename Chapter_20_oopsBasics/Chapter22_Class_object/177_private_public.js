class Credentials {
    #apiKey;
    user;

    constructor(user, key) {
        this.user = user;      // public
        this.#apiKey = key;    // private
    }

    pramodgetAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_123");

console.log(cred.user);                  // admin
console.log(cred.pramodgetAuthHeader()); // Bearer secret_key_123
console.log(cred.apikey)