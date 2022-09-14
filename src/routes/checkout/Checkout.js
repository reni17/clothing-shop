import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Checkoutitem from "../checkout-item/CheckoutItem";
import "./Checkout.scss";
const Checkout = () => {
  const { cartItems, totalPrice} = useContext(CartContext);



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
