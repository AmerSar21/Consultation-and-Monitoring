import Activity from "../models/activity.model.js";

class ActivityRepository {
    async createActivity(data) {
        const activity = new Activity(data);
        return activity.save();
    }

    async getActivityById(id) {
        return Activity.findById(id);
    }

    async getAllActivities() {
        return Activity.find();
    }

    async updateActivity(id, data) {
        return Activity.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteActivity(id) {
        return Activity.findByIdAndDelete(id);
    }
}

export default new ActivityRepository();