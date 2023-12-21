import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import { tokenDecode } from "../middleware/authMiddleware.js";

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
        
    } catch (error) {
        res.status.json({
            massage : error.massage
        })
    }
}