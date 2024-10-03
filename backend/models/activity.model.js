import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        student: {
            type: String,
            required: true,
        },
        teacher: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "in progress", "completed", "denied", "canceled"],
            default: "pending"
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
