import { SET_SEARCH_TERM } from "../actions/filterActions";

const initialState = {
  searchTerm: ""
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload };
    }

    default:
      return state;
  }
};

export default filterReducer;
