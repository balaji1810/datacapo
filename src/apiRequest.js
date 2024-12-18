import axios from "axios";

const catApiLink = "https://api.thecatapi.com/v1/images/search";
const apiKey =
   "live_JuJGIqNWZzzWfqdR3vdPkgTU4GX7Q8sbzCz7VRnZPDjGYe4MGQROeM9hPgCtQccZ";

const catApiInstance = axios.create({
   baseURL: catApiLink,
   headers: {
      Accept: "application/json",
      "x-api-key": apiKey,
   },
});
export const catApiRequest = catApiInstance;

const jsonPlaceHolderApiLink = "https://jsonplaceholder.typicode.com/";

const jsonPlaceHolderInstance = axios.create({
   baseURL: jsonPlaceHolderApiLink,
   headers: {
      Accept: "application/json",
   },
});
export const jsonPlaceHolderApiRequest = jsonPlaceHolderInstance;
