import { transformResponse } from "./utils";
export function setRestaurantsData(state, response) {
  if (response.status === 200) {
    state.data = transformResponse(response.data);
    state.status = "Success";
  } else {
    state.status = "Error";
    console.error("Unknown error");
  }
}

export function setLoadingState(state, status) {
  state.status = status;
}
