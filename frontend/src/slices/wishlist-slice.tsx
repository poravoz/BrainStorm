import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, WishList } from "../types/index";
import { RootState } from "../app/store";

const initialState: WishList = {
    products: []
}

const WishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addProductWL: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        remProductWL: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);

            if (index !== -1) {
                state.products.splice(index, 1);
            }
        }
    }
})

export const selectProductWL = (state: RootState) => { return state.root.wishList.products }

export const { addProductWL, remProductWL } = WishListSlice.actions;
export default WishListSlice.reducer;