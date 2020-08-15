<template>
  <v-img v-bind:src="src" class="banner" dark>
    <div class="banner-content d-flex flex-column align-center justify-center">
      <h1 class="font-weight-bold mb-5 mt-5">
        {{ name }}
      </h1>
    </div>
  </v-img>
</template>

<script>
export default {
  name: "Banner",
  props: {
    src: String,
    name: String
  }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100vw;
  height: 200px;
  .banner-content {
    width: 100%;
    height: 100%;
    background-color: #0009;
  }
}
</style>
