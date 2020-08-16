export const getRestaurants = state => state.data;

export const getRestaurantData = state => id =>
  state.data.find(restaurant => restaurant.id === id);

export const getStatus = state => state.status;
