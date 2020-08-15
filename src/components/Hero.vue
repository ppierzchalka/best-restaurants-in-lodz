<template>
  <div class="hero">
    <v-parallax src="https://source.unsplash.com/collection/251966/1600x900">
      <div class="hero-content d-flex flex-column align-center justify-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          src="../assets/logo2.png"
          transition="scale-transition"
          width="200"
        />
        <h1 class="font-weight-bold mb-5 mt-5">
          Restaurantify
        </h1>
        <h2 class="font-weight-light">
          Find best restaurants in Łódź!
        </h2>
      </div>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss" scoped>
.hero {
  margin-bottom: 50px;
  .v-parallax__content {
    .hero-content {
      width: 100%;
      height: 100%;
      background-color: #0009;
    }
  }
}
</style>
