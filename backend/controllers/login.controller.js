import { validateLogin } from "../services/login.services.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await validateLogin(email,password);
        res.json({ token : token });
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
};