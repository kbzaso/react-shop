import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png';
import AppContext from '@context/appContext';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={iconClose}
        alt="close"
        className="pointer eliminate_item"
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};

export default OrderItem;
