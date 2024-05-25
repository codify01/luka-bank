const express = require('express')
const app = express()
const env = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors("*"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const userRouter =  require("./Routes/user.route")
app.use("/user",userRouter)
let URI = process.env.MONGO_URI
mongoose.connect(URI)
.then((response)=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log(err.code);
    console.log(err.message);
})










app.listen("5000", console.log("App running"))