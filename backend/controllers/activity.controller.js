import mongoose from "mongoose";
import Activity from "../models/activity.model.js";
import ActivityRepository from "../repository/activity.repository.js";

export const createActivity = async (req, res) => {
	const activity = req.body; 

	if (!activity.name || !activity.student || !activity.teacher || !activity.date || !activity.duration) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newActivity = await ActivityRepository.createActivity(activity);

	try {
		await newActivity.save();
		res.status(201).json({ success: true, data: newActivity });
	} catch (error) {
		console.error("Error in creating activity:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const getActivities = async (req, res) => {
	try {
		const activities = await ActivityRepository.getAllActivities();
		res.status(200).json({ success: true, data: activities });
	} catch (error) {
		console.log("error in fetching activities:", error.message);
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
		const updatedActivity = await ActivityRepository.updateActivity(id, activity);
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
		await ActivityRepository.deleteActivity(id);
		res.status(200).json({ success: true, message: "Activity deleted" });
	} catch (error) {
		console.log("error in deleting activity:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
