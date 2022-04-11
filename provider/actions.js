import { SET_USER, SET_CART } from "./constants";

export const setUser = payload => ({
    type: SET_USER,
    payload
});

export const setCart = payload => ({
    type: SET_CART,
    payload
});