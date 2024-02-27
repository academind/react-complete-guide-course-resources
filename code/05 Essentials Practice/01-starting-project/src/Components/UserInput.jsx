export default function UserInput({ onChange, investimentSettings }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investiment</label>
          <input
            type="number"
            required
            value={investimentSettings.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investiment</label>
          <input
            type="number"
            required
            value={investimentSettings.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={investimentSettings.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={investimentSettings.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
