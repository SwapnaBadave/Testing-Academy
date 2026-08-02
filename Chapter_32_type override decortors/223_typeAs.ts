let element: unknown = {
    tagname: "button",
    textcontext: "submit",
    id: "submit-btn",
    disabled: false
};

interface elementI {
    tagname: string;
    textcontext: string;
    id: string;
    disabled: boolean;
}

let button = element as elementI;
console.log("tag", button.tagname);
console.log("text", button.textcontext);
console.log("id", button.id);
console.log("disabled", button.disabled);
