<template>
  <div class="home">
    <Hero />
    <RestaurantList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import RestaurantList from "@/components/RestaurantList.vue";

export default {
  name: "Home",
  components: {
    Hero,
    RestaurantList
  }
};
</script>
