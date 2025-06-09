import { configureStore, createSlice } from "@reduxjs/toolkit";
import leaguesReducer from "./states/leagues/index";

export const makeStore = () => {
	return configureStore({
		reducer: {
			leagues: leaguesReducer,
		},
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
