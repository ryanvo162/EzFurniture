import { SET_USER , SET_CART } from "./constants";

export const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    addresses: [],
    phone: 0,
    avatar: "",
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
    default:
      return state;
  }
}

export default reducer;
