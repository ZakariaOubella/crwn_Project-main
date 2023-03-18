import { useContext } from "react";

import { CartContext } from "../../Context/Cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItems }) => {
  const { name, imageUrl, price, quantity } = cartItems;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItems);
  const addItemHandler = () => addItemToCart(cartItems);
  const removeItemHandler = () => removeItemFromCart(cartItems);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={addItemHandler}>
          &#10094;
        </div>{" "}
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={removeItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

/*



*/