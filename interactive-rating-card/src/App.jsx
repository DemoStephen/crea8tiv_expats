import { useState } from "react";
import RatingSection from "./components/RatingSection";
import ResultSection from "./components/ResultSection";

export default function App() {
  const [rating, setRating] = useState();
  const [currentState, setCurrentState] = useState("selection-state");

  function handleSelectedRating(value) {
    setRating(value);
    setCurrentState("result-state");
  }

  function handleReset() {
    setRating();
    setCurrentState("selection-state");
  }

  return (
    <>
      {currentState === "selection-state" && (
        <RatingSection onSelectedRating={handleSelectedRating} />
      )}
      {currentState === "result-state" && (
        <ResultSection onReset={handleReset} value={rating} />
      )}
    </>
  );
}
