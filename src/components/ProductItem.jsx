import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import appContext from '@context/appContext';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(appContext);

  const handleClick = (item) => {
    if (state.cart.includes(item)) {
      return;
    } else {
      addToCart(item);
    }
  };

  const verifyAdded = (item) => {
    if (state.cart.includes(item)) {
      return addedToCartImage;
    } else {
      return addToCartImage;
    }
  };

  return (
    <div className="ProductItem">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img
            src={verifyAdded(product)}
            className="pointer"
            alt="add item to the cart"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
