import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import adminProductsSlice from "./admin/products";
import adminOrderSlice from "./admin/order";
import shopProductsSlice from "./shop/products";
import shopCartSlice from "./shop/cart";
import shopAddressSlice from "./shop/address";
import shopOrderSlice from "./shop/order";
import shopSearchSlice from "./shop/search";

const store = configureStore({
  reducer: {
    auth: authReducer,

    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopAddress: shopAddressSlice,
    shopOrder: shopOrderSlice,
    shopSearch: shopSearchSlice,
  },
});

export default store;
