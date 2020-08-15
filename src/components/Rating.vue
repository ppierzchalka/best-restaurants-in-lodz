<template>
  <v-row align="center" class="mx-0 mb-4">
    <slot></slot>
    <v-rating
      class="mx-1"
      :value="ratingValue"
      color="amber"
      dense
      half-increments
      readonly
      size="18"
    />
    <div>
      <span class="mx-1">
        {{ user_rating.aggregate_rating }} ({{ user_rating.votes }})
      </span>
    </div>
    <v-chip dark v-bind:style="bgColor">
      {{ user_rating.rating_text }}
    </v-chip>
  </v-row>
</template>

<script>
export default {
  name: "Rating",
  props: {
    user_rating: {
      aggregate_rating: String,
      rating_text: String,
      rating_color: String,
      votes: String
    }
  },
  computed: {
    ratingValue: function() {
      return parseInt(this.user_rating.aggregate_rating, 10);
    },
    bgColor: function() {
      return "background-color: #" + this.user_rating.rating_color + ";";
    }
  }
};
</script>
