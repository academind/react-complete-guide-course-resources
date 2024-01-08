import React, { useState } from 'react';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { ResultSection } from './components/ResultSection';
import './index.css';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    let errorFrom = '';

    const inputErrors = {
        initialInvestment: () => {
            if (userInput.initialInvestment <= 0) {
                errorFrom = 'initialInvestment';
                return 'Initial investment must be greater than zero.';
            }

        },
        annualInvestment: () => {
            if (userInput.annualInvestment < 0) {
                errorFrom = 'annualInvestment';
                return 'Annual investment must be non-negative.';
            }

        },
        expectedReturn: () => {
            if (userInput.expectedReturn < 0) {
                errorFrom = 'expectedReturn';
                return 'Expected return must be non-negative.';
            }

        },
        duration: () => {
            if (userInput.duration < 1) {
                errorFrom = 'duration';
                return 'Duration must be greater than zero.';
            }

        },
    };

    const hasErrors = Object.values(inputErrors).some((getError) => getError());

    function handleChange(inputIdentifier, newValue) {
        setUserInput((previousUserInput) => {
            return {
                ...previousUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <>
            <Header />
            <div className='container'>
                <InputSection onChangeInput={handleChange} userInput={userInput} errorFrom={errorFrom} />

                {hasErrors && (
                    <div className='center alert'>
                        {Object.values(inputErrors).map((getError, index) => (
                            <span key={index}>{getError()}</span>
                        ))}
                    </div>
                )}

                {!hasErrors && <ResultSection userInput={userInput} />}
            </div>
        </>
    );
}

export default App;
