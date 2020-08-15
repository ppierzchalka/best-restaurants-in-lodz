import { zomatoApi } from "./api.js";

export function getData({ commit }) {
  zomatoApi
    .get()
    .then(response => commit("setRestaurantsData", response))
    .catch(error => {
      commit("setLoadingState", "Error");
      console.error(error);
    });
}
