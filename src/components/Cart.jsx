import { useDispatch, useSelector } from "react-redux";
import { add, remove, addByValue } from "../redux/features/cart/cartSlice";

const Cart = () => {

    const { select } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="text-center">Cart</h1>
            <div>
                <button onClick={() => dispatch(addByValue(2))} className="bg-Green-500 p-2">Add By Value Value</button>
                <br />
                <br />

                <button onClick={() => dispatch(add())} className="bg-yellow-500 p-2">Add</button>
                <div className="text-4xl">
                    <h1>{select}</h1>
                </div>
                <button onClick={() => dispatch(remove())} className="bg-yellow-500 p-2">Remove</button>
            </div>
        </div>
    )
}

export default Cart;