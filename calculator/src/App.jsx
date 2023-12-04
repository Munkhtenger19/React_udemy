import { useState } from 'react';

import Header from './components/Header';
import Res from './components/Res';
import UserInp from './components/UserInp';


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newVal) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newVal,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInp userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Res input={userInput} />}
    </>
  );
}

export default App;