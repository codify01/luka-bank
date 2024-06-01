
const userModel = require('../Model/user.model')

const getregisterUser = (req,res)=>{
    res.send('you are now a registered user')
}

const getauthenticateUser = (req,res)=>{
    res.send('You are now authentical')
}


const postregisterUser =(req, res)=>{
    let user = new userModel(req.body)
    user.save()
    .then((response)=>{
        res.send("Account created successfully")
        console.log(response);
        console.log("User saved sucessfully")
    })
    .catch((err)=>{
        console.log(err.message);
    })
} 

const postauthenticateUser = (req, res)=>{
     let {password} = req.body
     userModel.findOne({email:req.body.email})
     .then((user)=>{
        if(user){{
            user.validatePassword(password, ()=>{
                
            })
            return res.send({message:"Email Exist", status:true})}}
        else{
            return res.send({message:"wrong email", status:true})
            
        }
     })
     .catch((error) => {
        console.error("Error signing in:", error);
        return res.status(500).json({ message: "Internal server error" });
      });
}


module.exports = {postregisterUser, postauthenticateUser, getregisterUser, getauthenticateUser}