import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <p data-num>{count}</p>
      <button data-decrement onClick={decrement}>
        decrement
      </button>
      <button data-increment onClick={increment}>
        increment
      </button>
    </>
  );
}

export default App;
