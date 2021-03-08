import Axios from "axios";

//base url to make requests to the movie database
export const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

