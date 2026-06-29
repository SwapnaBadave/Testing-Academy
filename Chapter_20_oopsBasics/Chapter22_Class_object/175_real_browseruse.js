class testcase{
    constructor (name,status,priority){
        this.name= name;
        this.status= status
        this.priority= priority
    }

    display(){
      console.log(this.name + " = " + this.status + " = " + this.priority);
    
}
}
let login_tc= new testcase ("login test", "pass", "PO")
let singup = new testcase ("signup test ","fail", "p1")
login_tc.display();