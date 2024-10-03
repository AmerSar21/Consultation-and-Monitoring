import User from "../models/user.model";

export async function getUsers() {
    const users = await User.find({});
    return users;
}