import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.utils.js"; 

export const validateLogin = async(email, password) => {
    try {
        const existingUser = await User.findOne({email});
        if(!existingUser){
            throw new Error("User not found!");
        }
        const isPasswordValid = bcrypt.compare(password,existingUser.password);
        if(!isPasswordValid){
            throw new Error("Incorrect Password");
        }
        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        console.log("Error! Invalid Credentials", error.message)
        throw new Error("Error! Invalid Credentials");
    }
} 