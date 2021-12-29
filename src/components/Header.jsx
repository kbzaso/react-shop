import React, { useState, useContext } from 'react';
import Menu from '@components/Menu';
import '@styles/Header.scss';
import appContext from '@context/appContext';
import MyOrder from '@containers/MyOrder.jsx';
import MenuMobile from '@components/MenuMobile';

import LogoDesktop from '@logos/logo_yard_sale.svg';
import IconMenu from '@icons/icon_menu.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

export default function Header() {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(appContext);

  const handleClickMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img
        src={IconMenu}
        alt="menu"
        className="menu"
        onClick={handleClickMobile}
      />
      <div className="navbar-left">
        <img src={LogoDesktop} alt="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 && <div>{state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggleMobile && <MenuMobile />}
      {toggle ? <Menu /> : null}
      {toggleOrders && <MyOrder />}
    </nav>
  );
}
