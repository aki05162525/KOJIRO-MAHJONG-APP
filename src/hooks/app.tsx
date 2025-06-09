import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "../infla/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector = useSelector<RootState>;
export const useAppStore = useStore<AppStore>;
