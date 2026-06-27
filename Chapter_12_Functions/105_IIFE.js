(function () {
    console.log("hi");
})();

(function (name) {  
    console.log("hi "+ name);
})("john");

//arrow
(() => {
    console.log("hi");
})();