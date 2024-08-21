import { useState } from "react";
import star from "../assets/icon-star.svg";
import Rating from "./Rating";

export default function RatingSection({ onSelectedRating }) {
  const [selectedRating, setSelectedRating] = useState();
  const [isError, setIsError] = useState(false);

  const ratingValues = [1, 2, 3, 4, 5];

  function handleSubmit(event) {
    event.preventDefault();

    if (!selectedRating) {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
      return;
    }

    onSelectedRating(selectedRating);
  }

  return (
    <section className="rating-state">
      <div className="star">
        <img src={star} alt="star" />
      </div>
      <h1 className="heading">How did we do?</h1>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="ratings">
          {ratingValues.map((ratingValue) => (
            <Rating
              key={ratingValue}
              onSelectRating={(value) => setSelectedRating(value)}
              value={ratingValue}
            />
          ))}
        </div>
        <button className="btn">Submit</button>
        {isError && <p className="error text-center">Please enter a rating</p>}
      </form>
    </section>
  );
}
