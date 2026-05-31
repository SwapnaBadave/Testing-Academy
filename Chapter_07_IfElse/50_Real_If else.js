let loggedin= true;
let userrole= "subscriber";
if (loggedin) 
    {if (userrole === "Admin"){ console.log("Admin can login") }}
else if (userrole === "editor") { console.log("editor can login") }
else if (userrole === "subscriber") { console.log("subscriber can login") }
else { console.log("user can login") }  