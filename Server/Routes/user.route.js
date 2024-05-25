const express = require('express')
const { registerUser, authenticateUser } = require('../Controller/user.controller')
const userRouter = express.Router()

userRouter.get("/welcome", (req,res)=>{
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

// userRouter.get("/register", registerUser)
// userRouter.get("/signin", authenticateUser)

userRouter.post("/register", registerUser )
userRouter.post("/signin", authenticateUser)


module.exports = userRouter