import { validateLogin, decodeUserToken } from "../services/login.services.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await validateLogin(email, password);
        console.log("json :", token);
        res.json({ token: token, success: true, message: "Login Successfull" });
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
};

export const decode = async (req, res) => {
    try {
        const { token } = req.body;
        const userData = await decodeUserToken(token);
        res.json({ user: userData, success: true, message: "User token decoded Successfully" });
    } catch (error) {
        res.status(401).json({ success: false, message: "Token decoded failed" });
    }
}