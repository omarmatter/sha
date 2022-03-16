import { createStore } from "redux";

const initialState = { activePage: "userView" };

function activePageReducer(state = initialState, action) {
  switch (action.type) {
    case "changePage":
      return {
        ...state,
        activePage: action.page,
      };

    default:
      return state;
  }
}

let store = createStore(activePageReducer);

export default store;
