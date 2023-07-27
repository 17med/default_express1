const express=require("express");
const PORT=process.env.PORT | 3001;
const app=express();
require('dotenv').config();
const path = require('path');
app.use(express.static('./src/public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'));
app.use(require("./src/Routes/home"))
app.use(require("./src/Routes/dbtester"))
app.use(require("./src/Routes/catchRoute"))
app.listen(PORT,()=>{
    console.log(`server run on port ${PORT}`)
})