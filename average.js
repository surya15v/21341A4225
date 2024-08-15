const app1= require("express");
const { request } = require("http");
const path=require("path");
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const file=path.join(__dirname,"database.db");
const app = app1();
let db=null;
data=async ()=>{
    try{
       db= await open({
        filename:file,
        driver:sqlite3.Database,
       });
       app.listen(9876,()=>{console.log("sever started");});
    }
    catch(e){
        console.log(`error ${e.message}`);
        process.exit(1);
    }
};
data();
app.get("/numbers/:number1/",async(request,response)=>{
        const {number1}=request.params;
        const b=`select * from database where name=${number1}`;
        const result=db.all(b);
        response.send(result);
})


