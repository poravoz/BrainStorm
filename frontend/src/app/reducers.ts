import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../themeReducer";
import wishListReduser from "../slices/wishlist-slice";
import shopingCartReduser from "../slices/shoping-cart-slice";
import OrderListReduser from "../slices/orderlist-slice";
import CustomerReduser from "../slices/сustomer-slice";

const rootReducer = combineReducers({
  theme: themeReducer,
  wishList: wishListReduser,
  shoppingCart: shopingCartReduser,
  customer:CustomerReduser,
  orderList: OrderListReduser
});

export default rootReducer;