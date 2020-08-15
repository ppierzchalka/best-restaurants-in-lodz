<template>
  <v-container>
    <p>{{ JSON.stringify(getStatus) }}</p>
    <ul>
      <li v-for="restaurant in getRestaurants" v-bind:key="restaurant.id">
        {{ restaurant.name }}
      </li>
    </ul>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RestaurantList",
  computed: {
    ...mapGetters(["getRestaurants", "getStatus"])
  },
  watch: {
    getStatus: function(newStatus) {
      if (newStatus === "Success") {
        console.log(this.$store.getters.getRestaurantData("16533294"));
      }
    }
  }
};
</script>
