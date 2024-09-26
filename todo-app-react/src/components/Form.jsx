import { useState } from "react";

export default function Form({ onAddListItem }) {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");

  function handleAddListItem(event) {
    event.preventDefault();

    if (!value.trim()) return;

    const name = value.trim();
    const id = `${name}_${Math.random()}_${Math.random()}`;

    onAddListItem(id, name, isChecked);
  }

  return (
    <form action="#" className="form" onSubmit={handleAddListItem}>
      <input
        className="form-checkbox"
        type="checkbox"
        id="form-checkbox"
        name="form-checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prevVal) => !prevVal)}
      />
      <label htmlFor="form-checkbox"></label>
      <input
        type="text"
        className="form-text-input"
        name="form-input"
        placeholder="Create a new todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}
