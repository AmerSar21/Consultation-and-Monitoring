import mongoose from "mongoose";
import bcrypt from "bcrypt";
import UserService from "../services/user.service.js";

export const createUser = async (req, res) => {
    const user = req.body;
    user.password = await bcrypt.hash(user.password, 10);

    if (!user.name || !user.email || !user.password || !user.role) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    try {
        const newUser = await UserService.createUser(user);
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        console.error("Error in Creating User:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    };


};

export const getUsers = async (req, res) => {
    try {
        const Users = await UserService.getAllUsers();
        res.status(200).json({ success: true, data: Users });
    } catch (error) {
        console.log("error in fetching Users:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User Id" });
    }
    try {
        const getFoundUser = await UserService.getUserById(id);
        if (!getFoundUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: "User found successfully", user: getFoundUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;

    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User Id" });
    }

    try {
        const updatedUser = await UserService.updateUser(id, user, { new: true });
        res.status(200).json({ success: true, message: "User Updated Successfully", updateUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid User Id" });
    }

    try {
        await UserService.deleteUser(id);
        res.status(200).json({ success: true, message: "User deleted" });
    } catch (error) {
        console.log("error in deleting User:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
