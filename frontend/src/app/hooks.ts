import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, storeSliderState } from "./reducers";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<storeSliderState> = useSelector;