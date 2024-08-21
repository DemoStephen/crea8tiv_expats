import { useState } from "react";
import RatingSection from "./components/RatingSection";
import ResultSection from "./components/ResultSection";

export default function App() {
  const [rating, setRating] = useState(null);
  // jsx expression javascript interpolation expressions
  return (
    <>
      {rating ? (
        <ResultSection onReset={() => setRating(null)} value={rating} />
      ) : (
        <RatingSection onSelectedRating={(value) => setRating(value)} />
      )}
    </>
  );
}
