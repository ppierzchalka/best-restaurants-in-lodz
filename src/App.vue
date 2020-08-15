<template>
  <v-app>
    <Header />
    <v-main>
      <status-overlay v-if="status !== 'Success'" v-bind:status="status" />
      <router-view v-else />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import StatusOverlay from "./components/StatusOverlay.vue";

export default {
  name: "App",
  components: {
    Footer,
    StatusOverlay,
    Header
  },
  created() {
    this.$store.dispatch("getData");
  },
  computed: {
    status() {
      return this.$store.getters.getStatus;
    }
  }
};
</script>
