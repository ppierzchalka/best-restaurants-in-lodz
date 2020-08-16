import Vue from "vue";
import Vuex from "vuex";
import { getData } from "./actions";
import { setLoadingState, setRestaurantsData } from "./mutations";
import { getRestaurantData, getRestaurants, getStatus } from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    status: "NotAsked"
  },
  actions: {
    getData
  },
  mutations: {
    setRestaurantsData,
    setLoadingState
  },
  getters: {
    getRestaurants,
    getRestaurantData,
    getStatus
  }
});
