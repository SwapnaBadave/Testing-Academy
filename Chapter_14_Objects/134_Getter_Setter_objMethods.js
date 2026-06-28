const user= {
    name: "Pramod",
    lastname: "dutta",
    get Fullname(){
        return this.name+this.lastname;
    },
    set Fullname(value) {
      [ this.name , this.lastname] = value.split(" ");
    }
}
console.log(user.Fullname);
user.Fullname= "Swapna Badave"
console.log(user.Fullname)

// we are not going to use in playwright

// class user {
//     name
//     lastname
//     Fullname() {

//     }
// } will be going to se this format 
