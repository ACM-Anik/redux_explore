import { useDispatch, useSelector } from "react-redux";
import { include, extract, addByValue } from "../redux/features/cart/cartSlice";

const Cart = () => {

    const { select } = useSelector((state) => state.cart);
    console.log(select);
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <h1 className="text-3xl">Cart</h1>
            <div>
                <button onClick={() => dispatch(addByValue(2))} className="bg-green-500 p-2">Add By Value Value</button>
                <br />
                <br />

                <button onClick={() => dispatch(include())} className="bg-yellow-500 p-2">Include</button>
                <div className="text-2xl">
                    <h1>You selected: {select}</h1>
                </div>
                <button onClick={() => dispatch(extract())} className="bg-yellow-500 p-2">Extract</button>
            </div>
        </div>
    )
}

export default Cart;