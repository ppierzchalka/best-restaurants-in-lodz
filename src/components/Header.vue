<template>
  <v-app-bar app dark sticky color="#34495E">
    <router-link to="/" class="header-link">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          src="../assets/logo2.png"
          transition="scale-transition"
          width="50"
        />
        <v-toolbar-title>Restaurantify</v-toolbar-title>
      </div>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.header-link {
  text-decoration: none;
  color: #fff;
}
</style>
