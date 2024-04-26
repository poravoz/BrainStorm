import { createSlice } from "@reduxjs/toolkit";
import { Product, WishList } from "./entities/entities";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState} from "../../../app/store";

const initialState: WishList = {
    products: []
}

const StoreSliderSlice = createSlice({
    name: "storeSlider",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        remProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            
            if (index !== -1) {
                state.products.splice(index, 1);
            }
        }
    }
})

export const selectProduct= (state: RootState) => {return state.storeSlider.products}

export const {addProduct, remProduct} = StoreSliderSlice.actions;
export default StoreSliderSlice.reducer;