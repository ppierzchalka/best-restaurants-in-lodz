export const transformResponse = responseData =>
  responseData.restaurants.map(r => transformRestaurantData(r));

const transformRestaurantData = responseObj => {
  const { restaurant } = responseObj;
  const {
    id,
    name,
    location,
    featured_image,
    cuisines,
    timings,
    average_cost_for_two,
    highlights,
    user_rating,
    all_reviews_count,
    photos_url,
    photo_count,
    menu_url,
    has_online_delivery,
    has_table_booking,
    events_url,
    phone_numbers,
    thumb
  } = restaurant;
  const { aggregate_rating, rating_text, rating_color } = user_rating;
  return {
    id,
    name,
    address: location.address,
    thumb,
    featuredImage: featured_image,
    timings,
    cuisines,
    averageCost: average_cost_for_two,
    highlights,
    rating: {
      aggreagateRating: aggregate_rating,
      ratingText: rating_text,
      ratingColor: rating_color,
      allReviewsCount: all_reviews_count
    },
    photosUrl: photos_url,
    photoCount: photo_count,
    menuUrl: menu_url,
    hasOnlineDelivery: has_online_delivery,
    hasTableBooking: has_table_booking,
    eventsUrl: events_url,
    phoneNumbers: phone_numbers
  };
};
