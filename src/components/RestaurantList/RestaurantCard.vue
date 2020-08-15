<template>
  <v-card>
    <v-img v-bind:src="thumbUrl" aspect-ratio="1" />
    <v-card-title>{{ restaurant.name }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="ratingValue"
          color="amber"
          dense
          half-increments
          readonly
          size="18"
        ></v-rating>
        <div class="ml-4">
          <v-card-text>
            {{ restaurant.user_rating.aggregate_rating }} ({{
              restaurant.all_reviews_count
            }})
          </v-card-text>
        </div>
        <v-chip dark v-bind:style="bgColor">
          {{ restaurant.user_rating.rating_text }}
        </v-chip>
      </v-row>
      <v-card-text class="subtitle-1 text-center cusines-list">
        {{ restaurant.cuisines }}
      </v-card-text>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn block color="#41B883" dark v-bind:to="path">
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "RestaurantCard",
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
    ratingValue: function() {
      return parseInt(this.restaurant.user_rating.aggregate_rating, 10);
    },
    bgColor: function() {
      return (
        "background-color: #" + this.restaurant.user_rating.rating_color + ";"
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
  height: 100px;
}
</style>
