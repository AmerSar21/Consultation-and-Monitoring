import User from "../models/user.model.js";

class UserRepository {
    async createUser(data) {
        const user = new User(data);
        return user.save();
    }

    async getUserById(id) {
        return User.findById(id);
    }

    async getUserByEmail(email) {
        return User.findOne(email);
    }

    async getAllUsers() {
        return User.find();
    }

    async updateUser(id, data) {
        return User.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUser(id) {
        return User.findByIdAndDelete(id);
    }
}

export default new UserRepository();