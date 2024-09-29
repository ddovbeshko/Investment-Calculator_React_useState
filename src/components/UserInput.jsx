import Input from "../components/Input.jsx";
const INPUTS = {
  initialInvestment: {
    label: "Initial Investment",
    prop: "initialInvestment",
  },
  annualInvestment: {
    label: "Annual Investment",
    prop: "annualInvestment",
  },
  expectedReturn: {
    label: "Expected Return",
    prop: "expectedReturn",
  },
  duration: {
    label: "Duration",
    prop: "duration",
  },
};

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label={INPUTS["initialInvestment"].label}
          value={userInput.initialInvestment}
          handleChanges={(value) =>
            onChange(INPUTS["initialInvestment"].prop, value)
          }
        />
        <Input
          label={INPUTS["annualInvestment"].label}
          value={userInput.annualInvestment}
          handleChanges={(value) =>
            onChange(INPUTS["annualInvestment"].prop, value)
          }
        />
      </div>
      <div className="input-group">
        <Input
          label={INPUTS["expectedReturn"].label}
          value={userInput.expectedReturn}
          handleChanges={(value) =>
            onChange(INPUTS["expectedReturn"].prop, value)
          }
        />
        <Input
          label={INPUTS["duration"].label}
          value={userInput.duration}
          handleChanges={(value) => onChange(INPUTS["duration"].prop, value)}
        />
      </div>
    </section>
  );
}
