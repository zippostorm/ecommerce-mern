import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import adminProductsSlice from "./admin/products";
import shopProductsSlice from "./shop/products";

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    shopProducts: shopProductsSlice,
  },
});

export default store;
