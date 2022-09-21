import './CartIcon.styles.js'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon.styles.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, selectCartCount, selectCartItems } from '../../store/cart/cartSelector.js'
import { setCart } from '../../store/cart/cartAction.js'

const CartIcon = () => {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    const cartCounter = useSelector(selectCartCount)
    // const {cart, setCart, cartCounter} = useContext(CartContext)
    const clickHandler = () => {
       return dispatch(setCart(!cart))
    }

 
    return (
   <CartIconContainer onClick={clickHandler} >
    <ShoppingIcon className = 'shopping-icon'/>
    <ItemCount>{cartCounter}</ItemCount>
</CartIconContainer>     
    )
}

export default CartIcon