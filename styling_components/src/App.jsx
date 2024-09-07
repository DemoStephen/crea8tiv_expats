import styled from "styled-components";

import Input from "./components/Input/Input";
/* 
vanilla css
inline styles
styled components
tailwind
*/

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  background-color: #147b73;
  color: #d9e2f1;
  cursor: pointer;
  display: block;
  margin-left: 330px;
  margin-top: 30px;

  &:hover,
  &:focus {
    background-color: #319890;
  }
`;

const Form = styled.form`
  width: 90%;
  max-width: 40rem;
  margin: 3rem auto;
  padding: 2rem;
  // background: linear-gradient(180deg, #253c3c, #1d4949);
  background-color: ${({ $bgClr }) => ($bgClr ? "red" : "blue")};
  border-radius: 8px;
  box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.5);
`;

function App() {
  return (
    <>
      <form className="w-[90%] max-w-2xl my-[3rem] mx-auto p-8 rounded-lg">
        <Input title="First Name" id="firstName" />
        <Input title="Last Name" id="lasttName" />
        <button className="py-2 px-4 rounded bg-button  hover:bg-button-hover] focus:bg-button-hover text-[#d9e2f1] cursor-pointer block mt-4">
          Submit
        </button>
        {/* <p>hello</p> */}
        {/* <button style={{
          color: "red",
          ["background-color"]: "white"
        }}>Submit</button> */}
      </form>
    </>
  );
}

export default App;
