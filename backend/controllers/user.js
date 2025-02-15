import bcryptjs from "bcryptjs";

import { User } from "../models/userModel.js";


// user acpunt registration 
export const Register = async (req,res) =>{
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }

        const hashedPassword = await bcryptjs.hash(password,16);

        await User.create({
            fullName,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account created successfully.",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
};

