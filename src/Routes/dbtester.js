const express=require("express");
const Route=express.Router();
const {connect}=require("../services/db");
Route.get("/connect",async (req,res)=>{
var c=await connect();

    res.render("connectdb",{title:"dbconnect","connected":c})
})
module.exports=Route;