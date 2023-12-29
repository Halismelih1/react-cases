import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../utils/Types"; 

const initialState = {
    products: [] as Product[],
    productsStatus: "IDLE" as "IDLE" | "LOADING" | "SUCCESS" | "FAIL",
    productDetail: null as Product | null,
    productsDetailStatus: "IDLE" as "IDLE" | "LOADING" | "SUCCESS" | "FAIL",
  };

  export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  });
  
  export const getDetailProduct = createAsyncThunk("getProduct", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  });
  
  export const getCategoryProduct = createAsyncThunk(
    "getCategory",
    async (category:String) => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      return data;
    }
  );
  
  const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state, action) => {
          state.productsStatus = "LOADING";
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.productsStatus = "SUCCESS";
          state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.productsStatus = "FAIL";
        })
  
        .addCase(getDetailProduct.pending, (state, action) => {
          state.productsDetailStatus = "LOADING";
        })
        .addCase(getDetailProduct.fulfilled, (state, action) => {
          state.productsDetailStatus = "SUCCESS";
          state.productDetail = action.payload;
        })
        .addCase(getDetailProduct.rejected, (state, action) => {
          state.productsDetailStatus = "FAIL";
        })
  
        .addCase(getCategoryProduct.pending, (state, action) => {
          state.productsStatus = "LOADING";  
        })
        .addCase(getCategoryProduct.fulfilled, (state, action) => {
          state.productsStatus = "SUCCESS"; 
          state.products = action.payload;
        })
        .addCase(getCategoryProduct.rejected, (state, action) => {
          state.productsStatus = "FAIL";  
        });
    },
  });
  
  export default productSlice.reducer;
