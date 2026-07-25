const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ message: "All field are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password do not match" })
        }

        const user = await userModel.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);


        const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        await userModel.create({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePhoto : gender=='male' ? maleProfilePhoto :femaleProfilePhoto
            
        })

        return res.status(201).json({message:"New User Created successfully",success:true});


    } catch (error) {
        console.log(error);
        
    }
}

const login = async (req,res) =>{
   try {
     const {username,password} =req.body;
    if(!username || !password) {
        return res.status(400).json({message:"All fields are required"})
    };

    const user = await userModel.findOne({username});
    if(!user) {
        return res.status(400).json({message:"Invalid username or password"});
    };

    const isPasswordMatch = bcrypt.compare(password,user.password);
    if(!isPasswordMatch) {
        return res.status(400).json({message:"Invalid username or password",success:false});
    };

    const tokenData = {
        userId:user._id
    }

    const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

    return res.status(200).cookie('token',token,{maxAge:1*24*60*60*1000,httpOnly:true, sameSite:'strict'}).json({
        _id:user._id,
        username:user.username,
        fullName:user.fullName,
        profilePhoto:user.profilePhoto
    });

   } catch (error) {
    console.log(error)
   }
}

const logout = (req,res)=>{
    try {
        return res.status(200).cookie('token',"",{maxAge:0}).json({message:"User logged out succesfully."});
    } catch (error) {
        console.log(error);
        
    }
} 

module.exports = register;
module.exports = login;
module.exports = logout;