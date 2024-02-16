import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

    const { } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="text-center">Cart</h1>
            <div>
                <button onClick={() => dispatch()} className="bg-Green-500 p-2">Add By Value Double</button>
                <br />
                <br />

                <button onClick={() => dispatch()} className="bg-yellow-500 p-2">Add</button>
                <div className="text-4xl">
                    <h1>{}</h1>
                </div>
                <button onClick={() => dispatch()} className="bg-yellow-500 p-2">Remove</button>
            </div>
        </div>
    )
}

export default Cart;