/* eslint-disable react/prop-types */
export default function Rating({ value, onSelectRating }) {
  return (
    <div className="rating">
      <input
        type="radio"
        name="rating"
        id={value}
        value={value}
        onChange={() => onSelectRating(value)}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
}
