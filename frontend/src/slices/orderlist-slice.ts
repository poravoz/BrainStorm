import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderList } from "../types/index";
import { RootState } from "../app/store";

const initialState: OrderList = {
    orders: []
}

const OrderListSlice = createSlice({
    name: "orderList",
    initialState,
    reducers: {
        addOrderOL: (state, action: PayloadAction<Order>) => {
            state.orders.push(action.payload);
        }
    }
})

export const selectOrdersOL = (state: RootState) => { return state.root.orderList.orders }

export const { addOrderOL} = OrderListSlice.actions;
export default OrderListSlice.reducer;