<template>
  <div class="home">
    <hero />
    <restaurant-list />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import RestaurantList from "@/components/RestaurantList/RestaurantList.vue";

export default {
  name: "Home",
  components: {
    Hero,
    RestaurantList
  }
};
</script>
