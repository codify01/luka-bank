const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
// const {hashedpassword} = require('../Controller/user.controller')
let userSchema = mongoose.Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    phonenumber:{type:Number, required:true, unique:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    transactionHiistory: {type:Array},
    occupation:{type:String}
})

let saltRound = 10 

userSchema.pre('save', function(next){
     bcrypt.hash(this.password, saltRound, function(err, hashedpassword){
        if(err){
            console.log(err);
        }else{
            console.log(hashedpassword)
            this.password = hashedpassword
            next()
        }
    })
})

userSchema.methods.validatePassword = (password )=>{
    
    console.log(password);
    console.log(this);
}

let userModel = new mongoose.model("user_collection", userSchema)



module.exports = userModel