const express=require("express");
const Route=express.Router();
Route.use((req,res)=>{
    res.status(404).redirect("/")
})
module.exports=Route;