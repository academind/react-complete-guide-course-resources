import React from 'react';

export const InputSection = ({ onChangeInput, userInput, errorFrom }) => {
        return (
                <section id='user-input'>
                        <div className="input-group">
                                <div>
                                        <label htmlFor="initial-investment">Initial Investment</label>
                                        <input
                                                value={userInput.initialInvestment}
                                                onChange={(e) => onChangeInput('initialInvestment', e.target.value)}
                                                type="number"
                                                required
                                                name='initial-investment'
                                                disabled={errorFrom !== '' && errorFrom !== 'initialInvestment'} 
                                        />
                                </div>
                                <div>
                                        <label htmlFor="annual-investment">Annual Investment</label>
                                        <input
                                                value={userInput.annualInvestment}
                                                onChange={(e) => onChangeInput('annualInvestment', e.target.value)}
                                                type="number"
                                                required
                                                name='annual-investment'
                                                disabled={errorFrom !== '' && errorFrom !== 'annualInvestment'} 
                                        />
                                </div>
                        </div>
                        <div className="input-group">
                                <div>
                                        <label htmlFor="expected-return">Expected Return</label>
                                        <input
                                                value={userInput.expectedReturn}
                                                onChange={(e) => onChangeInput('expectedReturn', e.target.value)}
                                                type="number"
                                                required
                                                name='expected-return'
                                                disabled={errorFrom !== '' && errorFrom !== 'expectedReturn'} 
                                        />
                                </div>
                                <div>
                                        <label htmlFor="duration">Duration</label>
                                        <input
                                                value={userInput.duration}
                                                onChange={(e) => onChangeInput('duration', e.target.value)}
                                                type="number"
                                                required
                                                name='duration'
                                                disabled={errorFrom !== '' && errorFrom !== 'duration'} 
                                        />
                                </div>
                        </div>
                </section>
        );
};
