import { catApiRequest, jsonPlaceHolderApiRequest } from "../apiRequest";
import {
   catBlogDataLoading,
   catBlogDataLoadingFail,
   catBlogDataLoadingSuccess,
   updateCatBlogData,
} from "./slices/catBlogSlice";
import {
   catInfoLoading,
   catInfoLoadingFail,
   catInfoLoadingSuccess,
   updateCountryFilter,
} from "./slices/categorySclice";

const getCountriesFromCats = (data) => {
   const origins = new Set();
   data.map((item) => {
      origins.add(item.breeds[0].origin);
   });
   return Array.from(origins).sort();
};

const formatCatData = (data) => {
   return data.map((cat) => {
      return {
         id: cat.id,
         url: cat.url,
         name: cat.breeds[0].name,
         origin: cat.breeds[0].origin,
         description: cat.breeds[0].description,
         temperament: cat.breeds[0].temperament,
         lifeSpan: cat.breeds[0].life_span,
      };
   });
};

export const loadCats = () => async (dispatch) => {
   try {
      dispatch(catInfoLoading());
      const { data } = await catApiRequest.get("?limit=100&has_breeds=1");

      const origins = getCountriesFromCats(data);
      const formattedCatData = formatCatData(data);

      dispatch(catInfoLoadingSuccess({ formattedCatData, origins }));
   } catch (error) {
      dispatch(catInfoLoadingFail());
      console.log(error);
   }
};

export const changeCountryFilter = (filter) => (dispatch, getState) => {
   const currentState = getState();
   const { catCategories } = currentState;
   const { catDetailsOriginal } = catCategories;
   let filteredCats = [];
   // dispatch(catInfoLoading());
   if (filter === "All Countries") filteredCats = catDetailsOriginal;
   else {
      catDetailsOriginal.map((cat) => {
         if (cat.origin === filter) filteredCats.push(cat);
      });
   }
   dispatch(updateCountryFilter({ filter, filteredCats }));
};

export const formatCatBlogData = (data, users) => {
   return data.map((blog) => {
      const random = Math.floor(Math.random() * users.length);
      return {
         tag: users[random].username,
         title: blog.title,
         description: blog.body,
         name: users[random].name,
         email: users[random].email,
      };
   });
};

export const loadCatBlogs = () => async (dispatch) => {
   try {
      dispatch(catBlogDataLoading());
      const { data } = await jsonPlaceHolderApiRequest.get("posts");
      const { data: users } = await jsonPlaceHolderApiRequest.get("users");
      const original = formatCatBlogData(data, users);

      dispatch(
         catBlogDataLoadingSuccess({ original, data: original.slice(0, 10) })
      );
   } catch (error) {
      dispatch(catBlogDataLoadingFail());
      console.log(error);
   }
};

export const paginateCatBlog = (index) => (dispatch, getState) => {
   const currentState = getState();
   const { catBlogs } = currentState;
   const { catBlogDataOriginal } = catBlogs;
   const sliced = catBlogDataOriginal.slice(10 * (index - 1), 10 * index);
   dispatch(updateCatBlogData(sliced));
};
