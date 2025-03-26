import { useState } from 'react';

import Header from "./components/Header"
import { Listing } from "./components/Listing"
import UserInputs from "./components/UserInputs"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  
  return (
    <div className="center">
      <Header />

      <UserInputs userInput={userInput} handleChanging={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Listing input={userInput} />}
    </div>

  )
}

export default App
