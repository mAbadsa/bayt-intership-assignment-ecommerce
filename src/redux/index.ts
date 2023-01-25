import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";

import productsSlice from "./slices/products";
import { productsApi } from "./apis/productApi";

const rootReducer = combineReducers({
  products: productsSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      productsApi.middleware
    ),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

export {
  useGetProductsQuery,
  useGetAllProductsQuery,
  useGetFilteredProductsByCategoryQuery,
} from "./apis/productApi";
export {
  setProducts,
  setSortType,
  setCategoryId,
  setProductsCount,
  setProductsOffset,
  setFilteredProductsByCategory,
} from "./slices/products";

