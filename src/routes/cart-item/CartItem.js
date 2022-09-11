import './CartItem.scss'
const CartItem = ({item}) => {
    return (
        <div className="cart-item-container">
            <img src = {item.imageUrl} alt = {item.name}></img>
            <div className="item-details">
            <span className="name">{item.name}</span>
            <span className="price">{item.quantity} x {item.name}</span>
            </div>
        </div>
    )
}

export default CartItem