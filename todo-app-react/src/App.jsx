import { useState } from "react";
import Main from "./components/Main";
import Picture from "./components/Picture";

function App() {
  const [theme, setTheme] = useState("dark");

  function handleThemeChange() {
    setTheme(prevTheme => {
      if(prevTheme === "dark") {
        document.body.classList.add("light")
        return "light"
      }else {
        document.body.classList.remove("light")
        return "dark"
      }
    })
  }

  return (
    <>
      <Picture theme={theme} />
      <Main onChangeTheme={handleThemeChange} />
    </>
  );
}

export default App;
