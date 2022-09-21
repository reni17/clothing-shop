import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { selectCartItems } from '../../store/cart/cartSelector'
import CartItem from '../cart-item/CartItem'
import Button from '../sign-up/SignUp-buttons/Button'
import './CartDropdown.styles.js'
import { EmptyMess, CartItems, CartDropdownContainer } from './CartDropdown.styles.js'

const CartDropdown = () => {

const cartItems = useSelector(selectCartItems)
// const {cartItems} = useContext(CartContext)
let navigate = useNavigate()



   
const checkoutPage = () => {
    navigate('checkout')
}
    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ?  cartItems.map(el => <CartItem key={el.id} item = {el}/>) : <EmptyMess>Your car is empty</EmptyMess>}
            </CartItems>
            <Button onClick = {checkoutPage}>Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown