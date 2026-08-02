class testdatastorage<T> {
    private data: T[] = []
    additem(item: T) {  
        this.data.push(item)
    }   
    getitem(index: number) {
        return this.data[index]
    }   
}

let stringdata = new testdatastorage<string>();
stringdata.additem("swapna");
stringdata.additem("kumar");
console.log("stringdata", stringdata.getitem(0));
console.log("stringdata", stringdata.getitem(1));