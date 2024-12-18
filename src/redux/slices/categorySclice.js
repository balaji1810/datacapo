import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
   name: "catCategories",
   initialState: {
      catLoading: true,
      error: false,
      catDetailsOriginal: [],
      catDetailsFiltered: [],
      highlightCountryFilter: "All Countries",
      originCountries: [],
   },
   reducers: {
      catInfoLoading: (state) => {
         return {
            ...state,
            catLoading: true,
            highlightCountryFilter: "All Countries",
         };
      },
      catInfoLoadingSuccess: (state, action) => {
         return {
            ...state,
            catDetailsOriginal: action.payload.formattedCatData,
            catDetailsFiltered: action.payload.formattedCatData,
            catLoading: false,
            originCountries: action.payload.origins,
         };
      },
      catInfoLoadingFail: (state) => {
         return {
            ...state,
            catLoading: false,
            error: true,
         };
      },
      updateCountryFilter: (state, action) => {
         return {
            ...state,
            highlightCountryFilter: action.payload.filter,
            catDetailsFiltered: action.payload.filteredCats,
            catLoading: false,
         };
      },
   },
});

export const {
   catInfoLoading,
   catInfoLoadingSuccess,
   catInfoLoadingFail,
   updateCountryFilter,
} = categorySlice.actions;

export default categorySlice.reducer;
