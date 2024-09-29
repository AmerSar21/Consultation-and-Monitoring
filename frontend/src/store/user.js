import { create } from "zustand";

export const useUserStore = create((set) => ({
	user: null,
	users: [],
	setUsers: (users) => set({ users }),
	setUser: (user) => set({ user }),
	createUser: async (newUser) => {
		if (!newUser.name || !newUser.email || !newUser.password || !newUser.role) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch("/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		});
		const data = await res.json();
		set((state) => ({ users: [...state.users, data.data] }));
		console.log(res, data);
		return { success: true, message: "Registered successfully" };
	},
	fetchUsers: async () => {
		const res = await fetch("/api/users");
		const data = await res.json();
		set({ users: data.data });
	},
	fetchUserById: async (uid) => {
		const res = await fetch(`/api/users/${uid}`, {
			method: "GET"
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ user: state.user.filter((user) => user._id !== uid) }));
		set({ user: data });
		
		return { success: true };
	},
	deleteUsers: async (uid) => {
		const res = await fetch(`/api/users/${uid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ users: state.users.filter((user) => user._id !== uid) }));
		return { success: true, message: data.message };
	},
	updateUser: async (uid, updatedUser) => {
		const res = await fetch(`/api/users/${uid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedUser),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({
			users: state.users.map((user) => (user._id === uid ? data.data : user)),
		}));

		return { success: true, message: data.message };
	},
}));
