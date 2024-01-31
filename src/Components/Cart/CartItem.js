import { useDispatch } from "react-redux";
import dataProducts from "../../data/dataProducts";
import { removeItemFromCart } from "../../redux/cartSlice";


const CartItem = ({ cartItem }) => {

    console.log(cartItem)
    
    const plants = dataProducts.find(item => item.id === cartItem.plantId);
    const dispatch = useDispatch();

    return (
        <div>

            <div className="cart-container">
                <img className="cart-image" src ={ plants.image }  alt="Plant"/>

            <div className="cartInfo">

            <div className="cart-detail">
                <p className="cart-info"> <span>Name : </span> { plants.name } </p>
                <p className="cart-info"> <span>Qty : </span> { cartItem.quantity } </p>
                <p className="cart-info"> <span>Price : $ </span> { plants.price * cartItem.quantity } </p>

            <div className="total-amount">
                <span onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }) )}>
                    <img className="icon-delete" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/>
                </span>
            </div>
                </div>
            </div>    
        </div>
    </div>
        
    )
}

export default CartItem;