const users = require('../Model/userModel.js')
const jwt = require("jsonwebtoken")

exports.register = async (req,res)=>{
    console.log("inside register request");
    const {username,email,password} = req.body
    console.log(username,email,password);
       try {
        const existingUser = await users.findOne({email})
        if(existingUser){
         res.status(406).json("user already exist !!!")
        }else{
         const newUser = new users({
            username,email,password
         })
        await newUser.save()
        res.status(200).json(newUser)
        }
       } catch (error) {
        res.status(401).json(error)
       }
} 

exports.login = async (req,res)=>{
    console.log("inside login");
    const {email,password} = req.body
    console.log(email,password);
    try {
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            // generate token
            const token = jwt.sign({userId:existingUser._id},process.env.JWT)
    res.status(200).json({
        existingUser,
        token
    })
        }else{
            res.status(404).json("incorrect email / password")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}