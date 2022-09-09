import './CartIcon.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartIcon = () => {
    
    const {cart, setCart} = useContext(CartContext)
    const clickHandler = () => {
       return setCart(cart => !cart)
    }
    return (
   <div onClick={clickHandler} className='cart-icon-container'>
    <ShoppingIcon className = 'shopping-icon'/>
    <span className='item-count'>0</span>
</div>     
    )
}

export default CartIcon