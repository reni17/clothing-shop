import { CART_ACTIONS } from "./cartTypes";


const INITIAL_STATE = {
    cart: false,
    cartItems:[],
    // cartCounter: 0,
    // totalPrice: 0
}



export const cartReducer = (state = INITIAL_STATE, action = {}) => {
    const {type, payload} = action

    switch(type){
      case CART_ACTIONS.SET_CART_ITEMS:
        return {
          ...state,
          cartItems: payload
        }
      case CART_ACTIONS.SET_CART_OPEN:
        return {
            ...state,
            cart: payload
        }

        default:
          return state

    }
  }