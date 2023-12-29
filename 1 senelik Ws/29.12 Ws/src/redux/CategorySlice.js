import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,

};

export const getCategories = createAsyncThunk("category", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return response.data;
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getCategories.pending, (state, action) => {
        categoriesStatus = STATUS.LOADİNG
    })

    builder.addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        categoriesStatus = STATUS.SUCCESS
      })

    builder.addCase(getCategories.rejected, (state, action) => {
        categoriesStatus = STATUS.FAİL
      })
  },
});

export default categorySlice.reducer;
