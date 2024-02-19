import Cart from "../components/Cart";
import Counter from "../components/Counter";


function Home() {

  return (
    <>
      <h1 className="text-center text-5xl mb-10">Home</h1>
      <div className="mb-10 bg-purple-200">
        <Counter></Counter>
      </div>

      <div className="mb-10 bg-yellow-200">
        <Cart></Cart>
      </div>
    </>
  )
}

export default Home;