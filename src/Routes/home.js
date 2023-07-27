const express=require("express");
const Route=express.Router();
Route.get("/",(req,res)=>{
    res.render("home.ejs",{title:"homepage",msg:"Bo7Express"})
})
module.exports=Route;