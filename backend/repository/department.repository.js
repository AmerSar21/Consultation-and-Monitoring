import Department from "../models/department.model.js";

class DepartmentRepository {
    async createDepartment(data) {
        const department = new Product(data);
        return department.save();
    }

    async getDepartmentById(id) {
        return Department.findById(id);
    }

    async getAllDepartments() {
        return Department.find();
    }

    async updateDepartment(id, data) {
        return Department.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteDepartment(id) {
        return Department.findByIdAndDelete(id);
    }
}

export default new DepartmentRepository();