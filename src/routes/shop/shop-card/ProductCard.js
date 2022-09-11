import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import Button from '../../sign-up/SignUp-buttons/Button'
import './ProductCard.scss'

const ProductCard = ({product}) => {

    const {addItemToCart} = useContext(CartContext)
    const addProductHandler = () =>{
     addItemToCart(product)  
   
     }
    
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