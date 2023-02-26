import './cart-icon.styles.scss'
import { ReactComponent as ShoppingCard } from "./shopping-bag.svg";
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart.context';
import CartItem from '../cart-item/cart-item.component';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingCard className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;