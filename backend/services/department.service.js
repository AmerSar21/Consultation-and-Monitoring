import DepartmentRepository from "../repository/department.repository.js";

class DepartmentService {
    async createDepartment(data) {
        return DepartmentRepository.createDepartment(data);
    }

    async getDepartmentById(id) {
        return DepartmentRepository.getDepartmentById(id);
    }

    async getAllDepartments() {
        return DepartmentRepository.getAllDepartments();
    }

    async updateDepartment(id, data) {
        return DepartmentRepository.updateDepartment(id, data);
    }

    async deleteDepartment(id) {
        return DepartmentRepository.deleteDepartment(id);
    }
}

export default new DepartmentService();