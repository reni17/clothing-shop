import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartContext } from '../../contexts/CartContext'
import { addItemToCart, decrementItem, incrementItem, removeItem } from '../../store/cart/cartAction'
import { selectCartItems } from '../../store/cart/cartSelector'
import './CheckoutItem.scss'

const Checkoutitem = ({item}) => {
  const dispatch = useDispatch()
    const {name, imageUrl, price, quantity} = item
    const cartItems = useSelector(selectCartItems)

    // const {cartItems, updateCartItemsReducer} = useContext(CartContext)

    const buttonsHandler = (currentItem, e) => {
        const eventClass = e.target.className
        console.log(eventClass.includes('inc'));
        let newItems
        if(eventClass.includes('inc')){
          newItems = cartItems.map(el => el.id == currentItem.id ? {...el, quantity: el.quantity +1} : el) 
        }else if(eventClass.includes('dec')){
            if(currentItem.quantity== 1){
                return
            }
          newItems = cartItems.map(el => el.id == currentItem.id ? {...el, quantity: el.quantity -1} : el) 
        }else if(eventClass == 'remove-button'){
          newItems = cartItems.filter(el => el.id !== currentItem.id) 

        }
        
        dispatch(addItemToCart(newItems, currentItem))
      }

    const increment =() => dispatch(incrementItem(cartItems, item))
    const decrement =() => dispatch(decrementItem(cartItems, item))
    const remove =() => dispatch(removeItem(cartItems, item))
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt = {`${name}`}></img>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={decrement} className='arrow dec'>&#10094;</div>
                  <span className='value'>{quantity}</span>
                <div onClick={increment} className='arrow inc'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={remove} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default Checkoutitem