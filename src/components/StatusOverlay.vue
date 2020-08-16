<template>
  <v-container
    class="loader-container d-flex flex-column align-center justify-center"
  >
    <v-card
      class="mx-auto d-flex flex-column align-center justify-center px-7 py-7"
    >
      <v-progress-circular
        v-if="status === 'Loading'"
        indeterminate
        color="#41B883"
      />
      <v-card-text>
        <p class="display-1 text--primary">
          {{ statusText }}
        </p>
      </v-card-text>
      <v-card-actions v-if="status === 'Error'">
        <v-btn block dark color="error" v-on:click="getData">
          Try again
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "StatusOverlay",
  props: {
    status: String
  },
  computed: {
    statusText: function() {
      if (this.status === "Loading") {
        return "Loading ...";
      } else if (this.status === "Error") {
        return "Error loading data!";
      }
      return this.status;
    }
  },
  methods: {
    getData: function() {
      this.$store.dispatch("getData");
    }
  }
};
</script>

<style lang="scss" scoped>
.loader-container {
  height: 100%;
}
</style>
