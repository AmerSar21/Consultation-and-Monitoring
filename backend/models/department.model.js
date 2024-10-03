import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true, // createdAt, updatedAt
	}
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;
