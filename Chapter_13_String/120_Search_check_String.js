//search check string
let url = "https://www.google.com/search?q=javascript+closure&oq=javascript+closure&aqs=chrome..69i57j0i512l9.1234j0j7&sourceid=chrome&ie=UTF-8";
console.log(url.includes("javascript"));
console.log(url.includes("prod"));

// Startwith, endwith
url.startsWith("https");
url.endsWith("UTF-8");

//indexOf / Last index of
console.log(url.indexOf("a"))
console.log(url.lastIndexOf("c"))
console.log(url.indexOf("x"))
console.log(url.search(/search/))

//regex : / regular expression/ pattern that you can find within 
