// import { createContext, useState, useReducer, useEffect } from "react";
// import { createAction } from "../utils/reducer/reducerUtils";

// export const CartContext = createContext() 


// // const INITIAL_STATE = {
// //     cart: false,
// //     cartItems:[],
// //     cartCounter: 0,
// //     totalPrice: 0
// // }



//   // const addCartItem =(cartItems, productToAdd) => {

//   //   const existingItem = cartItems.find(item => item.id === productToAdd.id)
//   //   if(existingItem){
//   //    return cartItems.map(cartItem => 
//   //     cartItem.id == productToAdd.id ?{ ...cartItem, quantity: cartItem.quantity +1} : cartItem
//   //     )
//   //   }else{
//   //     return [...cartItems, {...productToAdd, quantity:1}]   
//   //   }

//   // }




//   // const cartReducer = (state, action) => {
//   //   const {type, payload} = action

//   //   switch(type){
//   //     case 'SET_CART_ITEMS':
//   //       return {
//   //         ...state,
//   //         ...payload 
//   //       }
//   //     case 'SET_CART_OPEN':
//   //       return {
//   //           ...state,
//   //           cart: payload
//   //       }

//   //       default:
//   //         throw new Error(`Unhandled type ${type} in cartReducer`)

//   //   }
//   // }


   
//   export const CartProvider = ({children}) => {
//     const [{cartItems, cart, cartCounter, totalPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE)


//  const updateCartItemsReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce((total, item) => total += item.quantity, 0)

//     const newTotalPrice = newCartItems.reduce((result, item) => result += item.quantity * item.price, 0)


//     dispatch(createAction('SET_CART_ITEMS', {cartItems: newCartItems, totalPrice: newTotalPrice, cartCounter: newCartCount})
//  )}

// //  const addItemToCart = (productToAdd) => {
// //     updateCartItemsReducer(addCartItem(cartItems, productToAdd))
// //   }
// //     const setCart = (bool) =>  dispatch(createAction('SET_CART_OPEN', bool))

   

//     const value = {cart, setCart, cartItems, addItemToCart, cartCounter, totalPrice, updateCartItemsReducer}
//     return (
//         <CartContext.Provider value = {value}>{children}</CartContext.Provider>
//     )
//   }