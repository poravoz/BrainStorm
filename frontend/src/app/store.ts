import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import storeSliderReducer from "../components/store-page/popular-devices/store-slider-slice";

const store = configureStore({
    reducer: {
        root: rootReducer,
        storeSlider: storeSliderReducer
    }
});

export default store;