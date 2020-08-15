<template>
  <div style="width: 50%">
    <v-card class="mx-auto my-12" max-width="500">
      <v-img height="250" v-bind:src="thumbUrl"></v-img>
      <v-card-title>{{ restaurant.name }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="ratingData.aggreagateRating"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ml-4">
            {{ ratingData.aggreagateRating }} ({{ ratingData.allReviewsCount }})
          </div>
        </v-row>
        <div class="my-4 subtitle-1">
          {{ restaurant.cuisines }}
        </div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Tonight's availability</v-card-title>
      <v-card-text>
        <v-chip-group active-class="deep-purple accent-4 white--text" column>
          <v-chip>5:30PM</v-chip>
          <v-chip>7:30PM</v-chip>
          <v-chip>8:00PM</v-chip>
          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text>
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: {
    restaurant: {
      name: String,
      location: String,
      timings: String,
      averageCost: String,
      rating: {
        aggreagateRating: String,
        ratingText: String,
        ratingColor: String,
        allReviewsCount: String
      },
      phoneNumbers: String
    }
  },
  computed: {
    thumbUrl: function() {
      return (
        this.restaurant.thumb ||
        "https://source.unsplash.com/collection/251966/500x250"
      );
    },
    ratingData: function() {
      const {
        aggreagateRating,
        ratingColor,
        ratingText,
        allReviewsCount
      } = this.restaurant.rating;
      return {
        aggreagateRating: parseInt(aggreagateRating, 10),
        ratingText,
        ratingColor,
        allReviewsCount
      };
    }
  }
};
</script>
