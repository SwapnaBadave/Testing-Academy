class basepage{
    constructor(pagename){
        this.pagename=pagename

    }
    open (){
    console.log("opening the page")
}
 close(){
    console.log("closing the page")
 }
}
class loginpage extends basepage{

}
 const page= new loginpage()
 page.open();
 page.close();