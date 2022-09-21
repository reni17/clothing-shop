import { Link, Outlet } from "react-router-dom";
import "../navigation/Navigation";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.styles.js";
import { useContext } from "react";
import { logOut } from "../../utils/firebase";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
// import { CartContext } from "../../contexts/CartContext";
import { LogoContainer, NavigationContainer, Navlinks, Navlink } from "./Navigation.styles.js";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSelector";
import { selectCart } from "../../store/cart/cartSelector";
const Navigation = () => {
  const currentUser = useSelector(selectUser)
  // const {cart} = useContext(CartContext)
  const cart = useSelector(selectCart)
  return (
    <>
      <NavigationContainer as = 'span'>
        <LogoContainer as = {Link}  to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <Navlinks>
          <Navlink as = {Link} to="/shop">
            SHOP
          </Navlink>
          {currentUser ? (
            <Navlink onClick={logOut} >
              SIGN OUT
            </Navlink>
          ) : (
            <Navlink as = {Link} to="/sign-in">
              SIGN IN
            </Navlink>
          )}

          <CartIcon />
        </Navlinks>
        {cart && <CartDropdown/>}
       
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
