const Route=require("express").Router();

Route.get("/",(req, res)=>{
    res.send("/home js");
})



module.exports=Route;
