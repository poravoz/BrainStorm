import { createSlice } from "@reduxjs/toolkit";
import { IWishListState, Product } from "./entities/entities";
import type {PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

const initialState:  IWishListState = {
    products: []
};

const StoreSliderSlice = createSlice({
    name: "storeSlider",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        }
    }
})

export const {addProduct} = StoreSliderSlice.actions;

export default StoreSliderSlice.reducer;
