import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";


const ChangeQuantity = ({ quantity, setQuantity, plant }) => {

    const dispatch = useDispatch();

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        const newQuantity = quantity - 1;
        if (quantity <= 1) return;
        setQuantity(newQuantity);
    }

    return (
        <div>
        <div className="btn-quantity">
            <button className="btn-add" onClick={addQuantity}>+</button>
                <span className="number">{ quantity }</span>
            <button className="btn-add" onClick={removeQuantity}>-</button>
        </div>
        <div className="addToCart">
            <button className="add-to-cart-btn" onClick={() => {dispatch(addItemToCart({ plant, quantity }));
            }}>Add To Cart</button> 
        </div>
        </div>
    )

    
}


export default ChangeQuantity;