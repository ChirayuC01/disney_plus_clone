import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "0264b0ea47e4e90feebb502d4f8909c2";

// https://api.themoviedb.org/3/trending/all/day?api_key=0264b0ea47e4e90feebb502d4f8909c2

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default {
  getTrendingVideos,
};
