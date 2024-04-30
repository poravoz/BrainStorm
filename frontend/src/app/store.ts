import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import storeSliderReducer from "../components/store-page/store-page-slice";
import themeReducer from "../themeReducer";

const store = configureStore({
    reducer: {
        root: rootReducer,
        storeSlider: storeSliderReducer
    }
});

//export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;