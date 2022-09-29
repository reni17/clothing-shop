import { createAction } from "../../utils/reducer/reducerUtils";
import { CART_ACTIONS } from "./cartTypes";

export const setCart = (bool) => {
    return createAction(CART_ACTIONS.SET_CART_OPEN, bool)
}


const addCartItem =(cartItems, productToAdd) => {

    const existingItem = cartItems.find(item => item.id === productToAdd.id)
    if(existingItem){
     return cartItems.map(cartItem => 
      cartItem.id == productToAdd.id ?{ ...cartItem, quantity: cartItem.quantity +1} : cartItem
      )
    }else{
      return [...cartItems, {...productToAdd, quantity:1}]   
    }

  }

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItmes = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItmes)
  }
    

export const incrementItem = (cartItems, product) => {
  const newCartItmes = addCartItem(cartItems, product)
    return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItmes)
}


export const decrementItem = (cartItems, product) => {
  if(product.quantity == 1){
    return
}
const newCartItmes = cartItems.map(el => el.id == product.id ? {...el, quantity: el.quantity -1} : el) 
return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItmes)
}

export const removeItem = (cartItems, product) => {
  const newCartItmes = cartItems.filter(el => el.id !== product.id) 
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCartItmes)
}