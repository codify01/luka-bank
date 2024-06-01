const express = require('express')
const { postregisterUser, postauthenticateUser,getregisterUser,getauthenticateUser } = require('../Controller/user.controller')
const userRouter = express.Router()

userRouter.get("/dashboard", (req,res)=>{
    let allUser = [
        {
            firstname:"Uthman",
            lastname:"Oluwaseun",
            email:"amoleuthman@gmail.com",
            NIN:30235547382728,
            account_number:9017967457,
            balance:200000,
            transaction:[],
            Address:"under G, Ogbomosho",
        }
    ]
    res.send({message:allUser})
})

userRouter.get("/register", getregisterUser)
userRouter.get("/signin", getauthenticateUser)

userRouter.post("/register", postregisterUser )
userRouter.post("/login", postauthenticateUser)


module.exports = userRouter