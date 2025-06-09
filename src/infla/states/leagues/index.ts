import type { League } from "@/domain/league";
import { fetchLeagues } from "@/usecases/leagues";
import { createSlice } from "@reduxjs/toolkit";

export interface State {
	leagues: League[];
	loading: "idle" | "pending" | "succeeded" | "failed";
}

const name = "leagues";

const initialState: State = {
	leagues: [],
	loading: "idle",
};

const slice = createSlice({
	name,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchLeagues.pending, (state) => {
			state.loading = "pending";
		});
		builder.addCase(fetchLeagues.fulfilled, (state, action) => {
			state.leagues = action.payload;
			state.loading = "succeeded";
		});
		builder.addCase(fetchLeagues.rejected, (state, action) => {
			state.loading = "failed";
			console.error("Failed to fetch leagues:", action.error);
		});
	},
});

export default slice.reducer;
