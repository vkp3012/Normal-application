import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req,res) => {
    try {
        const { firstName, lastName,email,phoneNumber,location, password } = req.body;
        const user = await userModel.findOne({ email : email });
        if(user) {
            return res.status(404).json({
                massage : "email already use..."
            })
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            firstName, 
            lastName,
            email,
            phoneNumber,
            location, 
            password: passwordHash
        })

        const save = await newUser.save();
        res.status(201).json(save);
    } catch (error) {
        res.status(500).json({
            error : error.massage
        })
    }
} 

export const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email : email})
        if(!user) return res.status(404).json({
            massage : "user does not exits..."
        })

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(404).json({
            massage : "Password is Wrong..."
        })

        const token = jwt.sign({id:user._id},process.env.TOKEN)
        res.status(200).json({
            massage : " user login...",
            token,user
        })
    } catch (error) {
        res.status.json({
            massage : error.massage
        })
    }
}