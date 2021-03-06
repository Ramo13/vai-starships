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
        fleet: state.fleet.filter((ship) => ship.id !== action.payload.id),
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

    case "SAVE_DETAILED":
      return {
        ...state,
        fleet: state.fleet.map((ship) => {
          if (ship.id === state.detailViewShip.id) {
            return { ...state.detailViewShip };
          } else {
            return { ...ship };
          }
        }),
        detailViewShip: {},
      };

    case "CANCEL_DETAILED":
      return {
        ...state,
        detailViewShip: {},
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
