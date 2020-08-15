<template>
  <v-card class="mx-auto" width="100%">
    <v-img height="250" v-bind:src="thumbUrl"></v-img>
    <v-card-title>{{ restaurant.name }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="ratingValue"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="ml-4">
          <v-card-text>
            {{ restaurant.rating.aggreagateRating }} ({{
              restaurant.rating.allReviewsCount
            }})
          </v-card-text>
        </div>
        <v-chip
          dark
          v-bind:style="'background: #' + restaurant.rating.ratingColor + ';'"
        >
          {{ restaurant.rating.ratingText }}
        </v-chip>
      </v-row>
      <v-card-text class="subtitle-1">
        {{ restaurant.cuisines }}
      </v-card-text>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="#41B883" dark>
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
      location: String,
      averageCost: String,
      rating: {
        aggreagateRating: String,
        ratingText: String,
        ratingColor: String,
        allReviewsCount: String
      }
    }
  },
  computed: {
    thumbUrl: function() {
      return (
        this.restaurant.thumb ||
        "https://source.unsplash.com/collection/251966/500x250"
      );
    },
    ratingValue: function() {
      return parseInt(this.restaurant.rating.aggreagateRating, 10);
    }
  }
};
</script>
