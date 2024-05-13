import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Product, ShoppingCart } from "../types/index";
import { RootState} from "../app/store";

const initialState: ShoppingCart = {
    products: [],
    totalPrice: 0
}

const ShoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        addProductSC: (state, action: PayloadAction<Product>) => {
            let line = state.products.find(line => line.product === action.payload);
            if (!line) {
                line = {
                    product: action.payload,
                    count: 1,
                };
                state.products.push(line);
                state.totalPrice = state.products.reduce((total, item) => {
                    const price = Number(item.product.price.replace(/\D/g, ''));
                    return total + price * item.count;
                }, 0);
            }
        },
        remProductSC: (state, action: PayloadAction<Product>) => {
            const titleToRemove = action.payload.title;
            const newProducts = state.products.filter(line => line.product.title !== titleToRemove);
            if (newProducts.length < state.products.length) {
                state.products = newProducts;
                state.totalPrice = newProducts.reduce((total, item) => {
                    const price = Number(item.product.price.replace(/\D/g, ''));
                    return total + price * item.count;
                }, 0);
            } else {
                console.log("Didn't find the product", titleToRemove, current(state));
            }
        },
        
        incProductSC: (state, action: PayloadAction<Product>) => {
            let line = state.products.find(line => line.product.title === action.payload.title);
            if (line) {
                line.count++;
                state.totalPrice = state.products.reduce((total, item) => {
                    const price = Number(item.product.price.replace(/\D/g, ''));
                    return total + price * item.count;
                }, 0);
            }
        },
        decProductSC: (state, action: PayloadAction<Product>) => {
            let line = state.products.find(line => line.product.title === action.payload.title);
            if (line) {
                if(line.count > 1){
                    line.count--;
                    state.totalPrice = state.products.reduce((total, item) => {
                        const price = Number(item.product.price.replace(/\D/g, ''));
                        return total + price * item.count;
                    }, 0);
                }
            }
        },
        clearCartSC: (state) => {
            state.products = [];
            state.totalPrice = 0;
        }
    }
})

export const selectProductSC = (state: RootState) => {return state.root.shoppingCart.products}
export const selectTotalPrice = (state: RootState) => {return state.root.shoppingCart.totalPrice}

export const {addProductSC, remProductSC, incProductSC, decProductSC, clearCartSC} = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;