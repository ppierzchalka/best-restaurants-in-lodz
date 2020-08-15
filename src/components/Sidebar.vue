<template>
  <v-col cols="12" md="3">
    <h3 class="font-weight-bold text-center">Links</h3>
    <div class="sidebar">
      <a class="sidebar-link" target="_blank" v-bind:href="url"
        >Read more on Zomato</a
      >
      <a class="sidebar-link" target="_blank" v-bind:href="menuUrl">Menu</a>
      <a class="sidebar-link" target="_blank" v-bind:href="photosUrl">Photos</a>
      <a class="sidebar-link" target="_blank" v-bind:href="eventsUrl">Events</a>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    url: String,
    menuUrl: String,
    photosUrl: String,
    eventsUrl: String
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  margin: 10px auto;
  .sidebar-link {
    color: #34495e;
    text-decoration: none;
    font-weight: bold;
    display: block;
  }
}
</style>
