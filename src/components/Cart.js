
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { removeItem } from "../components/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cart Items - {cartItems.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cartItems.map((item) => (
                    <CartItems key={item.card.info.id} info={item.card.info} onRemove={() => handleRemove(item.card.info.id)} />
                ))}
            </div>
        </div>
    );
}

export default Cart;
