import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../cart-item/CartItem'
import Button from '../sign-up/SignUp-buttons/Button'
import './CartDropdown.scss'

const CartDropdown = () => {
const {cartItems} = useContext(CartContext)
let navigate = useNavigate()

   
const checkoutPage = () => {
    navigate('checkout')
}
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(el => <CartItem key={el.id} item = {el}/>)}
            </div>
            <Button onClick = {checkoutPage}>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown