import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../themeReducer";
import wishListReduser from "../slices/wishlist-slice";
import shopingCartReduser from "../slices/shoping-cart-slice";

const rootReducer = combineReducers({
  theme: themeReducer,
  wishList: wishListReduser,
  shoppingCart: shopingCartReduser
});

export default rootReducer;