import { SET_USER, SET_CART, SET_ADDRESS, UPDATE_USER } from "./constants";

export const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    addresses: [],
    phone: 0,
    avatar: "",
    dob: "",
  },
  cart: {
    id: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        user: {
          ...state.user,
          addresses: action.payload,
        },
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default reducer;
