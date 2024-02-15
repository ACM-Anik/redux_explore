import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";

const Counter = () => {

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="text-center">Counter</h1>
            <div>
                <button onClick={() => dispatch(incrementByValue(5))} className="bg-blue-500 p-2">Increment By Value 5</button>
                <br />
                <br />

                <button onClick={() => dispatch(increment())} className="bg-purple-500 p-2">Increment</button>
                <div className="text-4xl">
                    <h1>{count}</h1>
                </div>
                <button onClick={() => dispatch(decrement())} className="bg-purple-500 p-2">Decrement</button>
            </div>
        </div>
    )
}

export default Counter;