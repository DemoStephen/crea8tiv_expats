import { useState } from "react";
import Header from "./Header";
import Keypad from "./Keypad";
import Screen from "./Screen";

function App() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [theme, setTheme] = useState("");

  function handleSelectTheme(themeVal) {
    setTheme(themeVal);
  }

  function handleAppendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;

    setCurrentOperand(`${currentOperand}${number}`);
  }

  function handleDeleteNumber() {
    setCurrentOperand((prevOperand) => prevOperand.slice(0, -1));
  }

  function handleReset() {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperator("");
  }

  function handleSelectOperator(operatorValue) {
    if (operator || !currentOperand) return;

    setPreviousOperand(currentOperand);
    setCurrentOperand("");
    setOperator(operatorValue);
  }

  function handleComputeResult() {
    if (!currentOperand || !previousOperand || !operator) return;

    const prev = +previousOperand;
    const current = +currentOperand;

    let result;

    switch (operator) {
      case "+":
        result = prev + current;
        break;

      case "-":
        result = prev - current;
        break;

      case "x":
        result = prev * current;
        break;

      case "/":
        result = prev / current;
        break;
    }

    setCurrentOperand(`${result}`);
    setPreviousOperand("");
    setOperator("");
  }

  return (
    <div className={`container ${theme}`}>
      <main className="main">
        <Header onSelectTheme={handleSelectTheme} />
        <Screen
          currentOperand={currentOperand}
          previousOperand={previousOperand}
          operator={operator}
        />
        <Keypad
          onAppendNumber={handleAppendNumber}
          onDeleteNumber={handleDeleteNumber}
          onReset={handleReset}
          onSelectOperator={handleSelectOperator}
          onComputeResult={handleComputeResult}
        />
      </main>
    </div>
  );
}

export default App;
