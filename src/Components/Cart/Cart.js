import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import herbIcon from '../../media/icon-herb.png'

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>

            <div className="App-head-cart">
                <h2>Your Cart <img src={ herbIcon } alt="Herb Icon"  width='35px'/></h2>
                
            </div>
            
            <div  className="cart-detail">
                {cartItems.map(cartItem => <CartItem cartItem={ cartItem } key={ cartItem.id }/>)}
            </div>

            <div className="total-cost">
                <h3>Total Cost : $ { totalPrice }</h3>
            </div>
        
        </div>
    )
}

export default Cart;