import { useState } from "react";
import Input from "./components/Input";
/* 
vanilla css
inline styles
styled components
tailwind
*/

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <form>
        <Input
          id="firstName"
          label="First Name"
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />

        <Input
          id="lastName"
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
