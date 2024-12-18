import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "./slices/categorySclice";
import catBlogSliceReducer from "./slices/catBlogSlice";

export default configureStore({
   reducer: {
      catCategories: categorySliceReducer,
      catBlogs: catBlogSliceReducer,
   },
});
