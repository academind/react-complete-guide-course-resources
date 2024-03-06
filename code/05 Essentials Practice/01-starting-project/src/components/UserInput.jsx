import React, { useState } from 'react';

export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label id="user-input label">Initial Investment </label>
          <input
            type="number"
            required
            id="user-input input"
            value={userInput.initialInvestment}
            onChange={(event) => onChange('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label id="user-input label">Annual Investment  </label>
          <input
            type="number"
            required
            id="user-input input"
            value={userInput.annualInvestment}
            onChange={(event) => onChange('annualInvestment', event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label id="user-input label">Expected Return </label>
          <input
            type="number"
            required
            id="user-input input"

            value={userInput.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label id="user-input label">Duration</label>
          <input
            type="number"
            required
            id="user-input input"
            value={userInput.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

