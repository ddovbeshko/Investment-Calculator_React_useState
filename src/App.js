import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;

  function handle(prop, value) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [prop]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handle} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration great or equal then 1</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
