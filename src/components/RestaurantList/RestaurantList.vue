<template>
  <v-container class="card-container d-flex flex-wrap justify-center">
    <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="restaurant in restaurants"
        v-bind:key="restaurant.id"
      >
        <restaurant-card v-bind:restaurant="restaurant" />
      </v-col>
    </v-row>
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
