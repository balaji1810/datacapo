import { createSlice } from "@reduxjs/toolkit";

export const catBlogSlice = createSlice({
   name: "catBlogs",
   initialState: {
      catBlogDataOriginal: [],
      catBlogLoading: true,
      error: false,
      catBlogData: [],
   },
   reducers: {
      catBlogDataLoading: (state) => {
         return {
            ...state,
            catBlogLoading: true,
         };
      },
      catBlogDataLoadingSuccess: (state, action) => {
         return {
            ...state,
            catBlogDataOriginal: action.payload.original,
            catBlogData: action.payload.data,
            catBlogLoading: false,
         };
      },
      catBlogDataLoadingFail: (state) => {
         return {
            ...state,
            catBlogLoading: false,
         };
      },
      updateCatBlogData: (state, action) => {
         console.log("action", action);
         return {
            ...state,
            catBlogData: action.payload,
         };
      },
   },
});

export const {
   catBlogDataLoading,
   catBlogDataLoadingSuccess,
   catBlogDataLoadingFail,
   updateCatBlogData,
} = catBlogSlice.actions;

export default catBlogSlice.reducer;
