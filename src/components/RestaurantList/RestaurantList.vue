<template>
  <v-container class="card-container d-flex flex-wrap justify-center">
    <restaurant-card
      v-for="restaurant in restaurants"
      v-bind:key="restaurant.id"
      v-bind:restaurant="restaurant"
    />
  </v-container>
</template>

<script>
import RestaurantCard from "./RestaurantCard";
export default {
  name: "RestaurantList",
  components: {
    RestaurantCard
  },
  computed: {
    restaurants: function() {
      return this.$store.getters.getRestaurants;
    }
  }
};
</script>
