import { useContext } from "react";
import { useSelector } from "react-redux";
import { CartContext } from "../../contexts/CartContext";
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";
import Checkoutitem from "../checkout-item/CheckoutItem";
import "./Checkout.scss";
const Checkout = () => {
  // const { cartItems, totalPrice} = useContext(CartContext);
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartTotal)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(el => (
       <Checkoutitem key={el.id} item = {el}/>
      ))}
      <span  className="total">Total: {totalPrice.toFixed(2)} $</span>
    </div>
  );
};

export default Checkout;
