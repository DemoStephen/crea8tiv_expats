import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  function decrement() {
    setNum((prevNum) => prevNum - 1);
  }

  function increment() {
    setNum((prevValue) => prevValue + 1);
  }

  return (
    <>
      <p data-num>{num}</p>
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
