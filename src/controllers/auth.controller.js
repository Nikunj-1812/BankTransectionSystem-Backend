const userModal = require("../models/user.models");

async function userRegCon(req,res){
    const {email , password , name } = req.body

    const isExists = await userModel. findOne({
        email: email
    })

    if (isExists) {
        return res. status (422) . json({
        message: "User already exists with email.",
        status: "failed"
    })
    }   

    const user = await userModal.create({
        email,password,name
    })
}
module.exports = {
    userRegCon 
}