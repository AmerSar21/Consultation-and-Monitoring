import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken, decodeToken } from "../middleware/jwt.utils.js";

export const validateLogin = async (email, password) => {
    try {
        const existingUser = await User.findOne({ email });
        const isPasswordValid = bcrypt.compare(password, existingUser.password);
        if (!existingUser || !isPasswordValid) {
            throw new Error("User not found!");
        }
        if (!isPasswordValid) {
            throw new Error("Incorrect Password");
        }
        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        throw new Error("Error! Invalid Credentials");
    }
};

export const decodeUserToken = async (token) => {
    try {
        const userData = decodeToken(token);
        return userData;
    } catch (error) {
        throw new Error("Error! decoding failed");
    }
}