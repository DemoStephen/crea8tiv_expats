import { useState } from "react";

import css from "./Input.module.css"

export default function Input({title, id}) {
  const [value, setValue] = useState("hello");
  return (
    <div className={`inline-block w-[45%] ${css.div}`}>
      <label htmlFor="firstName" className="">{title}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={() => setValue(event.target.value)}
      />
    </div>
  );
}
