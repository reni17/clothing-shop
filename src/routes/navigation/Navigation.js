import { Link, Outlet } from "react-router-dom";
import "../navigation/Navigation";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "../navigation/Navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { logOut } from "../../utils/firebase";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const {cart} = useContext(CartContext)
  console.log(cart);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {user ? (
            <span onClick={logOut} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {cart && <CartDropdown/>}
       
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
