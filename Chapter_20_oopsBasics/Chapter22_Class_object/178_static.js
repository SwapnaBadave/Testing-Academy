class student{
    constructor (name_student,mentor, phone_student){
        this.name_student=name_student;
        this.phone_student= phone_student;
        this.mentor=mentor
    }
    static name= "playwirght2x"
    static mentor= "Pramod"
    name_student;
    phone_student;
}

const S1=  new student("swati", "pramod",123455667)
const S2 = new student("swpana", "pramod", 44353646)
const S3 =new student("Rupali", "pramod", 6757768688)
console.log(S1.name_student)
console.log(S2.name_student)
console.log(S3.name_student)

