import { configureStore, createSlice } from "@reduxjs/toolkit";
// 一時的なダミーslice
const dummySlice = createSlice({
	name: "dummy",
	initialState: { value: 0 },
	reducers: {},
});

export const makeStore = () => {
	return configureStore({
		reducer: {
			dummy: dummySlice.reducer,
		},
	});
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
