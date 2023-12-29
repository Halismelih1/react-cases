// CategorySlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../utils/Types";
import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

const initialState = {
  categories: [] as Product[],
};

export const getCategories = createAsyncThunk<Product[], void, AsyncThunkConfig>(
  'categories/getCategories',
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products/categories");
    return response.data.map((category: string) => ({ category } as Product));
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
