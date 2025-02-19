import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import adminProductsSlice from "./admin/products";
import shopProductsSlice from "./shop/products";
import shopCartSlice from "./shop/cart";
import shopAddressSlice from "./shop/address";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
  },
});

export default store;
