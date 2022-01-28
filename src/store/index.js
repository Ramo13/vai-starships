import { createStore } from "redux";

const initialState = { fleet: [], detailViewShip: {} };

const fleetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_FLEET": {
      const crewString = action.payload.crew.split("-");
      const crewTemp = crewString[0] !== "unknown" ? crewString[0] : "0";

      const passengersTemp =
        action.payload.passengers === "n/a" ||
        action.payload.passengers === "unknown"
          ? "0"
          : action.payload.passengers;

      return {
        ...state,
        fleet: [
          ...state.fleet,
          {
            ...action.payload,
            id: Date.now(),
            capacity:
              Number(passengersTemp.replace(",", "")) +
              Number(crewTemp.replace(",", "")),
            passengersCapacity: Number(passengersTemp.replace(",", "")),
            passengers: 0,
            crew: Number(crewTemp.replace(",", "")),

            usage:
              (Number(crewTemp.replace(",", "")) * 100) /
              (Number(passengersTemp.replace(",", "")) +
                Number(crewTemp.replace(",", ""))),
          },
        ],
      };
    }
    case "DECREASE_FLEET":
      return {
        ...state,
        fleet: state.fleet.filter((ship) => ship.name !== action.payload.name),
      };

    case "OPEN_DETAILED":
      return {
        ...state,
        detailViewShip: action.payload,
      };

    case "ADD_PASSENGER":
      return {
        ...state,
        detailViewShip: {
          ...state.detailViewShip,
          passengers: state.detailViewShip.passengers + 1,
          usage:
            ((state.detailViewShip.crew + state.detailViewShip.passengers + 1) *
              100) /
            state.detailViewShip.capacity,
        },
      };
    case "REMOVE_PASSENGER":
      return {
        ...state,
        detailViewShip: {
          ...state.detailViewShip,
          passengers: state.detailViewShip.passengers - 1,
          usage:
            ((state.detailViewShip.crew + state.detailViewShip.passengers - 1) *
              100) /
            state.detailViewShip.capacity,
        },
      };

    default:
      return state;
  }
};

const store = createStore(
  fleetReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
