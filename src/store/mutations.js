export function setRestaurantsData(state, response) {
  if (response.status === 200) {
    state.data = response.data.restaurants;
    state.status = "Success";
  } else {
    state.status = "Error";
    console.error("Unknown error");
  }
}

export function setLoadingState(state, status) {
  state.status = status;
}
