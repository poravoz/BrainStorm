import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Order, ShoppingCart, ShoppingCartItem } from "../types/index";
import { RootState } from "../app/store";
import { Customer } from "../types/index";
import { clear } from "console";
import { stat } from "fs";

const initialState: Customer = {
    name: "",
    lastname: "",
    phone: "",
    email: ""
}

const CustomerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        setCustomerC: (state, action: PayloadAction<Customer>) => {
            state.name = action.payload.name;
            state.lastname = action.payload.lastname;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
        },
        clearCustomerC: (state) => {
            state.name = "";
            state.lastname = "";
            state.phone = "";
            state.email = ""
        }
    }
})

export const selectCustomerC = (state: RootState) => { return state.root.customer }

export const { setCustomerC, clearCustomerC } = CustomerSlice.actions;
export default CustomerSlice.reducer;