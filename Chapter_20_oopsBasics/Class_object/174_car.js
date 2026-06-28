class car{
    //CAB

    // Constructor
 constructor(name_given_duirng_obj_creation){
    this.name= name_given_duirng_obj_creation
 }

    //Attributes


    // behaviours

    drive(){
        console.log("i am driving ",this.name)
    }
}
const tesla= new car("model S")
//console.log(tesla.name)
tesla.drive();

const creta= new car("model creta")
creta.drive();