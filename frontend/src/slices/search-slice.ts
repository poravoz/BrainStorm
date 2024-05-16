import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductList, SearchState } from "../types/index";
import { RootState } from "../app/store";
import monitors from "../data/monitors";
import keyboards from "../data/keyboards";
import mice from "../data/mice";
import mouse_pads from "../data/mouse_pads";
import popular_devices from "../data/popular-devices";

const initialState: ProductList = {
    products: []
}

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchProductS: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase();
            const data = monitors.concat(keyboards, mice, mouse_pads, popular_devices);

            state.products = data.filter(product => 
                product.title.toLowerCase().includes(searchTerm)
            );
        }    
    }
})

export const selectProductsS = (state: RootState) => { return state.root.search.products; }

export const { searchProductS } = SearchSlice.actions;
export default SearchSlice.reducer;