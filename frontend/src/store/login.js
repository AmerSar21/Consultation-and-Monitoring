import { create } from "zustand";

export const useLoginStore = create((set) => ({
	user: null,
	setUser: (user) => set({ user }),
	authLogin: async (loggedUser) => {
		const res = await fetch("/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loggedUser),
		});
		const result = await res.json();
		set({ user: result });

		if (!result.success) return { success: false, message: result.message };
		return { success: true };
	},
}));
