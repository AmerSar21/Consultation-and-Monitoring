import mongoose from "mongoose";
import Activity from "../models/activity.model.js";

export const getActivities = async (req, res) => {
	try {
		const activities = await Activity.find({});
		res.status(200).json({ success: true, data: activities });
	} catch (error) {
		console.log("error in fetching activities:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createActivity = async (req, res) => {
	const activity = req.body; // user will send this data

	if (!activity.name || !activity.student || !activity.teacher || !activity.date || !activity.duration) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newActivity = new Activity(activity);

	try {
		await newActivity.save();
		res.status(201).json({ success: true, data: newActivity });
	} catch (error) {
		console.error("Error in creating activity:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const updateActivity = async (req, res) => {
	const { id } = req.params;

	const activity = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Activity Id" });
	}

	try {
		const updatedActivity = await Activity.findByIdAndUpdate(id, activity, { new: true });
		res.status(200).json({ success: true, data: updatedActivity });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const deleteActivity = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Activity Id" });
	}

	try {
		await Activity.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Activity deleted" });
	} catch (error) {
		console.log("error in deleting activity:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
