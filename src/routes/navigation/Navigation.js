import { Link, Outlet } from "react-router-dom";
import "../navigation/Navigation";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.styles.js";
import { logOut } from "../../utils/firebase";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
// import { CartContext } from "../../contexts/CartContext";
import { LogoContainer, NavigationContainer, Navlinks, Navlink } from "./Navigation.styles.js";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/userSelector";
import { selectCart } from "../../store/cart/cartSelector";
import { signOutStart } from "../../store/user/userAction";
const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectUser)
  const cart = useSelector(selectCart)

  const signOutUser = () => dispatch(signOutStart())
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
            <Navlink onClick={signOutUser} >
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
