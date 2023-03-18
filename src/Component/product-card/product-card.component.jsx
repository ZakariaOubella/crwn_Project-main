import { CartContext } from "../../Context/Cart.context";
import { useContext } from "react";

import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button.component";

import "./product-card.styles.scss";


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonTypes={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;