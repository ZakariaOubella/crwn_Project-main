import { React, Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "./crown.svg";
import { UserContext } from "../../Context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.util";

import CartIcon from "../../Component/Cart-Icon/cart-icon.component";
import CartDropdown from "../../Component/CardDropDown/cart-drop-down.component";
import { CartContext } from "../../Context/Cart.context";

import {
  NavigationComponent,
  NavLinks,
  NavLink,
  LogoContianer
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationComponent>
        <LogoContianer to="/">
          <Logo />
        </LogoContianer>
        <NavLinks>
          <NavLink to={"/shop"}>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as={'span'} onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>
              SIGN IN
            </NavLink>
          )}

          <NavLink>
            <CartIcon />
          </NavLink>
        </NavLinks>
        {isCartOpen && <CartDropdown />}

      </NavigationComponent>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
