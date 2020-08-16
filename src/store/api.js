import axios from "axios";

const config = {
  baseURL:
    "https://developers.zomato.com/api/v2.1/search?entity_id=261&entity_type=city&count=20&sort=rating&order=desc",
  headers: {
    "user-key": process.env.VUE_APP_ZOMATO_KEY,
    Accept: "application/json"
  }
};

export const zomatoApi = axios.create(config);
