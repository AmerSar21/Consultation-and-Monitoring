import mongoose from "mongoose";
import Department from "../models/department.model.js";
import DepartmentService from "../services/department.service.js";

export const createDepartment = async (req, res) => {
	const department = req.body; // user will send this data

	if (!department.name) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newDepartment = await DepartmentService.createDepartment(department);

	try {
		await newDepartment.save();
		res.status(201).json({ success: true, data: newDepartment });
	} catch (error) {
		console.error("Error in creating department:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const getDepartments = async (req, res) => {
	try {
		const departments = await DepartmentService.getAllDepartments();
		res.status(200).json({ success: true, data: departments });
	} catch (error) {
		console.log("error in fetching departments:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateDepartment = async (req, res) => {
	const { id } = req.params;

	const department = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Department Id" });
	}

	try {
		const updatedDepartment = await DepartmentService.updateDepartment(id, department);
		res.status(200).json({ success: true, data: updatedDepartment });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const deleteDepartment = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Department Id" });
	}

	try {
		await DepartmentService.deleteDepartment(id);
		res.status(200).json({ success: true, message: "Department deleted" });
	} catch (error) {
		console.log("error in deleting department:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
