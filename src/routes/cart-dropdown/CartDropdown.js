import Button from '../sign-up/SignUp-buttons/Button'
import './CartDropdown.scss'

const CartDropdown = () => {

   
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown