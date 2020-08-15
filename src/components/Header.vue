<template>
  <v-app-bar app dark sticky color="#34495E">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        src="../assets/logo2.png"
        transition="scale-transition"
        width="50"
      />
    </div>
    <v-toolbar-title>Restaurantify</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>
