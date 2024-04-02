import { createSlice } from "@reduxjs/toolkit";
import { Product, WishList } from "./entities/entities";
import type { PayloadAction } from "@reduxjs/toolkit";
import { storeSliderState } from "../../../app/reducers";

const initialState: WishList = {
    products: []
}

const StoreSliderSlice = createSlice({
    name: "storeSlider",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        }
    }
})

export const selectProduct= (state: storeSliderState) => {return state.storeSlider.products}

export const {addProduct} = StoreSliderSlice.actions;
export default StoreSliderSlice.reducer;