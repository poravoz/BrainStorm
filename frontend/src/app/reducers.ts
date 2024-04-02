import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../themeReducer";
import store from "./store";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type storeSliderState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default rootReducer;
