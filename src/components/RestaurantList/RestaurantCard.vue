<template>
  <v-card>
    <v-img v-bind:src="thumbUrl" aspect-ratio="1" />
    <v-card-title>{{ restaurant.name }}</v-card-title>
    <v-card-text>
      <rating v-bind:user_rating="restaurant.user_rating" />
      <v-card-text class="subtitle-1 text-center cusines-list">
        {{ restaurant.cuisines }}
      </v-card-text>
    </v-card-text>
    <v-divider class="mx-2"></v-divider>
    <v-card-actions>
      <v-btn block color="#41B883" dark v-bind:to="path">
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Rating from "../Rating";
export default {
  name: "RestaurantCard",
  components: {
    Rating
  },
  props: {
    restaurant: {
      id: String,
      name: String,
      all_reviews_count: String,
      user_rating: {
        aggregate_rating: String,
        rating_text: String,
        rating_color: String
      }
    }
  },
  computed: {
    thumbUrl: function() {
      return (
        this.restaurant.thumb ||
        "https://source.unsplash.com/collection/251966/500x500"
      );
    },
    path: function() {
      return `/restaurant/${this.restaurant.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.cusines-list {
  height: 90px;
}
</style>
