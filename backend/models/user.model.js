import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["admin", "teacher", "student"],
			default: "student"
		},
	}, 
	{
		timestamps: true, // createdAt, updatedAt
	}
);

const User = mongoose.model("User", userSchema);

export default User;