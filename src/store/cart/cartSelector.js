import {createSelector} from 'reselect'

const selectCartReducer = state => state.cart


export const selectCart = createSelector(
    [selectCartReducer],
    (cart) => cart.cart
)
export const selectCartItems = createSelector(
    [selectCartReducer],
    cart => cart.cartItems
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    cart => cart.reduce((total, item) => total += item.quantity, 0)
    )

export const selectCartTotal = createSelector(
    [selectCartReducer],
    cartItems => cartItems.reduce((result, item) => result += item.quantity * item.price, 0)
)
