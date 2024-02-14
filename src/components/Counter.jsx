import { useSelector } from "react-redux";

const Counter = () => {

    const { count } = useSelector((state) => state.counter);
    console.log(count);

    return (
        <div>
            <h1 className="text-center">Counter</h1>
            <div>
                <button>Increment</button>
                <div>
                    <h1>{count}</h1>
                </div>
                <button>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;