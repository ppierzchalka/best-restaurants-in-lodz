<template>
  <v-col cols="12" md="8">
    <h3 class="font-weight-bold text-center">Information</h3>
    <div>
      <rating v-bind:user_rating="restaurantData.user_rating">
        <span class="font-weight-bold">Rating: </span>
      </rating>
      <p>
        <span class="font-weight-bold">Address: </span>
        {{ restaurantData.location.address }}
      </p>
      <p>
        <span class="font-weight-bold">Cuisines: </span>
        {{ restaurantData.cuisines }}
      </p>
      <p>
        <span class="font-weight-bold">Opening hours: </span>
        {{ restaurantData.timings }}
      </p>
      <p>
        <span class="font-weight-bold">Phone numbers: </span>
        {{ restaurantData.phone_numbers }}
      </p>
      <p>
        <span class="font-weight-bold"> Average cost for two person: </span>
        {{ restaurantData.average_cost_for_two }}
        {{ restaurantData.currency }}
      </p>
      <div class="mx-0 mb-4">
        <span class="font-weight-bold">Tags: </span>
        <v-chip
          dark
          color="#34495E"
          v-for="tag in restaurantData.highlights"
          v-bind:key="tag"
          class="mx-1 my-1"
        >
          {{ tag }}
        </v-chip>
      </div>
    </div>
  </v-col>
</template>

<script>
import Rating from "../components/Rating";
export default {
  name: "RestaurantInfo",
  components: {
    Rating
  },
  props: {
    restaurantData: {
      location: {
        address: String
      },
      cuisines: String,
      timings: String,
      phone_numbers: String,
      average_cost_for_two: String,
      currency: String,
      user_rating: {
        aggregate_rating: String,
        rating_text: String,
        rating_color: String
      },
      highlights: Array
    }
  },
  computed: {
    ratingValue: function() {
      return parseInt(this.restaurantData.user_rating.aggregate_rating, 10);
    },
    bgColor: function() {
      return (
        "background-color: #" +
        this.restaurantData.user_rating.rating_color +
        ";"
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
