export const transformResponse = responseData =>
  responseData.restaurants.map(r => transformRestaurantData(r));

const transformRestaurantData = responseObj => {
  const { restaurant } = responseObj;
  return restaurant;
};
