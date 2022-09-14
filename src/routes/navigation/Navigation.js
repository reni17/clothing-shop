import { Link, Outlet } from "react-router-dom";
import "../navigation/Navigation";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.styles.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { logOut } from "../../utils/firebase";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
import { LogoContainer, NavigationContainer, Navlinks, Navlink } from "./Navigation.styles.js";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const {cart} = useContext(CartContext)
  console.log(cart);

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
          {user ? (
            <span onClick={logOut} >
              SIGN OUT
            </span>
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
