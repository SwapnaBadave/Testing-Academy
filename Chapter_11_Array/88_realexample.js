let browser =["chrome", "firefox", "edge", "safari"];
console.log(browser.length); // it will give the length of the array
console.log(browser); // it will give the whole array
browser.pop(); // it will remove the last element from the array
console.log(browser);
let removedElement = browser.shift(); // it will remove the first element and return it
console.log(browser);
console.log(removedElement); // it will give the removed element

for (let i=0; i<browser.length; i++){
    console.log(browser[i]);
    if (browser[i]==="edge"){
        console.log("found the edge browser");
        break; // it will exit the loop when the condition is met
    }
}