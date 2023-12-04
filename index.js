const express=require("express");
const PORT=process.env.PORT | 3000;
const app=express();
require('dotenv').config();
const path = require('path');
app.use(express.static('./src/public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'));
app.use(require("./src/Routes/RouteManger"))
app.listen(PORT,()=>{
    console.log(`server run on port ${PORT}`)
})
