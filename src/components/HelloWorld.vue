<template>
  <v-container>
    <p>{{ JSON.stringify(getStatus) }}</p>
    <p>{{ JSON.stringify(getRestaurants) }}</p>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
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
