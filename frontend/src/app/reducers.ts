import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../themeReducer";
import wishListReduser from "../slices/wishlist-slice";
import shopingCartReduser from "../slices/shoping-cart-slice";
import orderListReduser from "../slices/orderlist-slice";
import customerReduser from "../slices/сustomer-slice";
import searchReducer from "../slices/search-slice";

const rootReducer = combineReducers({
  theme: themeReducer,
  wishList: wishListReduser,
  shoppingCart: shopingCartReduser,
  customer: customerReduser,
  orderList: orderListReduser,
  search: searchReducer
});

export default rootReducer;