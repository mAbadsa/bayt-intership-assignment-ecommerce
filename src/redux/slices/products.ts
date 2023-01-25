import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products, ProductsState } from "./type";

const initialState: ProductsState = {
  productsCount: 0,
  products: [],
  productsOffset: 0,
  categoryId: 1,
  sortBy: "name",
};

export const prodcutsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(
      state: { products: Products[]; sortBy: string },
      action: PayloadAction<Products[]>
    ) {
      state.products = action.payload;
    },
    setFilteredProductsByCategory(
      state: { products: Products[] },
      action: PayloadAction<any>
    ) {
      state.products = action.payload;
    },
    setProductsCount(
      state: { productsCount: number },
      action: PayloadAction<any>
    ) {
      state.productsCount = action.payload.length;
    },
    setProductsOffset(
      state: { productsOffset: number },
      action: PayloadAction<any>
    ) {
      state.productsOffset = action.payload;
    },
    setCategoryId(state: { categoryId: number }, action: PayloadAction<any>) {
      state.categoryId = action.payload;
    },
    setSortType(state: { sortBy: string }, action: PayloadAction<any>) {
      state.sortBy = action.payload;
    },
  },
});

export const {
  setProducts,
  setSortType,
  setCategoryId,
  setProductsCount,
  setProductsOffset,
  setFilteredProductsByCategory,
} = prodcutsSlice.actions;
export default prodcutsSlice.reducer;

