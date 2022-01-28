import { createStore } from "redux";

const fleetReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  fleetReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
