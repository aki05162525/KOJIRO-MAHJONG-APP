import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLeagues = createAsyncThunk(
	"leagues/fetchLeagues",
	async () => {
		const response = await fetch("https://api.example.com/leagues");
		return response.json();
	},
);
