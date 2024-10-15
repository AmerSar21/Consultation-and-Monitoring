import bcrypt from "bcrypt";
import UserRepository from "../repository/user.repository.js";
import { generateToken, decodeToken } from "../middleware/jwt.utils.js";

class LoginService {
    async validateLogin(email, password) {
        try {
            const existingUser = await UserRepository.getUserByEmail({ email });
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
    }

    async decodeUserToken(token) {
        try {
            return decodeToken(token);
        } catch (error) {
            throw new Error("Error! Decoding Failed");
        }

    }
}

export default new LoginService();