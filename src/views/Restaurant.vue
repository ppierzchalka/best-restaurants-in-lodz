<template>
  <div class="about-restaurant">
    <banner v-bind:src="bannerUrl" v-bind:name="restaurantData.name" />
    <v-container class="d-flex justify-center flex-column">
      <v-row>
        <restaurant-info v-bind:restaurantData="restaurantData" />
        <v-col cols="12" md="1" class="d-flex justify-center">
          <v-divider vertical />
        </v-col>
        <sidebar
          v-bind:url="restaurantData.url"
          v-bind:menuUrl="restaurantData.menu_url"
          v-bind:photosUrl="restaurantData.photos_url"
          v-bind:eventsUrl="restaurantData.events_url"
        />
      </v-row>
      <div>
        <v-btn
          class="back-button"
          color="#42b983"
          dark
          v-on:click="$router.go(-1)"
          >Back</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import RestaurantInfo from "../components/RestaurantInfo";
import Sidebar from "../components/Sidebar";
export default {
  name: "Restaurant",
  components: {
    Banner,
    RestaurantInfo,
    Sidebar
  },
  computed: {
    restaurantData: function() {
      return this.$store.getters.getRestaurantData(this.$route.params.id);
    },
    bannerUrl: function() {
      return (
        this.restaurantData.featured_image ||
        "https://source.unsplash.com/collection/251966/2000x500"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.back-button {
  display: block;
  margin: 0 auto;
}
</style>
