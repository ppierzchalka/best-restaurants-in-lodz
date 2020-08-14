import Vue from "vue";
import Vuex from "vuex";
import { zomatoApi } from "./api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    status: "Loading"
  },
  actions: {
    getData({ commit }) {
      zomatoApi
        .get()
        .then(response => commit("setRestaurantsData", response))
        .catch(error => {
          commit("setLoadingState", "Error");
          console.error(error);
        });
    }
  },
  mutations: {
    setRestaurantsData(state, response) {
      if (response.status === 200) {
        state.data = response.data.restaurants;
        state.status = "Success";
      } else {
        state.status = "Error";
        console.error("Unknown error");
      }
    },
    setLoadingState(state, status) {
      state.status = status;
    }
  },
  getters: {
    getRestaurants: state => state.data,
    getRestaurantData: state => id =>
      state.data.find(item => item.restaurant.id === id),
    getStatus: state => state.status
  }
});
