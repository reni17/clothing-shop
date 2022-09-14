import './CartIcon.styles.js'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon.styles.js'

const CartIcon = () => {
   
    const {setCart, cartCounter} = useContext(CartContext)
    const clickHandler = () => {
       return setCart(cart => !cart)
    }

 
    return (
   <CartIconContainer onClick={clickHandler} >
    <ShoppingIcon className = 'shopping-icon'/>
    <ItemCount>{cartCounter}</ItemCount>
</CartIconContainer>     
    )
}

export default CartIcon