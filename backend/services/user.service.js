import UserRepository from "../repository/user.repository.js";

class UserService {
    async createUser(data) {
        return UserRepository.createUser(data);
    }

    async getUserById(id) {
        return UserRepository.getUserById(id);
    }

    async getAllUsers() {
        return UserRepository.getAllUsers();
    }

    async updateUser(id, data) {
        return UserRepository.updateUser(id, data);
    }

    async deleteUser(id) {
        return UserRepository.deleteUser(id);
    }
}

export default new UserService();