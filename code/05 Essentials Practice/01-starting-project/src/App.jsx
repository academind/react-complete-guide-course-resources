import { useState } from "react";

import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 6,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} investimentSettings={userInput} />
      {!inputIsValid && <p className="center">Please enter a valid data</p>}
      {inputIsValid && <Results investimentSettings={userInput} />}
    </>
  );
}

export default App;
