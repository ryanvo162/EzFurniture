import { SET_USER, SET_CART, SET_ADDRESS } from "./constants";

export const setUser = payload => ({
    type: SET_USER,
    payload
});

export const setCart = payload => ({
    type: SET_CART,
    payload
});

export const setAddress = payload => ({
    type: SET_ADDRESS,
    payload
});