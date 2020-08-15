export const getRestaurants = state => state.data.map(obj => obj.restaurant);

export const getRestaurantData = state => id =>
  state.data.find(item => item.restaurant.id === id).restaurant ?? null;

export const getStatus = state => state.status;
