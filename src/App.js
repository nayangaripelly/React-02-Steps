import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        ✖️
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            <h3>step-{step}:</h3> {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "whitesmoke" }}
              onClick={handlePrevious}
            >
              <span>👈</span>Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "whitesmoke" }}
              onClick={handleNext}
            >
              Next <span>👉</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
