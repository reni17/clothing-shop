import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartContext } from '../../../contexts/CartContext'
import { addItemToCart } from '../../../store/cart/cartAction'
import { selectCartItems } from '../../../store/cart/cartSelector'
import Button from '../../sign-up/SignUp-buttons/Button'
import './ProductCard.scss'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    // const {addItemToCart} = useContext(CartContext)
    const cartItems = useSelector(selectCartItems)
    const addProductHandler = () => dispatch(addItemToCart(cartItems, product))  
   
    
    return(
        <div className='product-card-container'>
            <img src={product.imageUrl}></img>
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </div>
            <Button onClick = {addProductHandler} buttonType='inverted'>Add to cart</Button>
        </div>
    )
}

export default ProductCard