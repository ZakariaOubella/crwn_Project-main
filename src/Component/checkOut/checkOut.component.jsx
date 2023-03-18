import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
    
  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
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

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItems={item} />
      ))}
      <hr />
      <div className="total">Total: ${cartTotal}</div>
    </div>
  );
};

export default CheckOut;







  /* <table className="checkout-header">
  <thead checkout-header>
    <tr className="header-block">
      <th>Product</th>
      <th>Description</th>
      <th>Qantity</th>
      <th>Price</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item) => (
      <tr key={item.id}>
        <td>
          <img src={item.imageUrl} alt={item.name} />
        </td>
        <td>{item.name}</td>
        <td>
          <button onClick={() => removeItemFromCart(item)}>{"-"}</button>
          {item.quantity}
          <button onClick={() => addItemToCart(item)}>{"+"}</button>
        </td>
        <td>${item.price}</td>
        <td>
          <button>X</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
<span className="Total">Total: $0</span> */
