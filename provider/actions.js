import { SET_USER, SET_CART, SET_ADDRESS, UPDATE_USER } from "./constants";

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

export const updateUser = payload => ({
    type: UPDATE_USER,
    payload
});