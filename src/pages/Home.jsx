import Cart from "../components/Cart";
import Counter from "../components/Counter";


function Home() {

  return (
    <>
      <h1 className="text-center text-5xl mb-10">Home</h1>
      <Counter></Counter>
      <Cart></Cart>
    </>
  )
}

export default Home;