import { useState } from "react";
import "./FlashCard.css";

export default function FlashCard({ question, answer }) {
  // Destructure the props object here
  const [isRotated, setIsRotated] = useState(false);

  const toggleCard = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="flash-card">
      <div className={`flash-card-inner ${isRotated ? "rotate" : ""}`}>
        <div className="flash-card-question">
          <h1>Question</h1>
          <p className="question-body">{question}</p>
        </div>
        <div className="flash-card-answer">
          <h1>Answer</h1>
          <p className="answer-body">{answer}</p>
          <div>
            <button>Explain Answer?</button>
          </div>
        </div>
      </div>
      <button onClick={toggleCard}>
        {isRotated ? "Show Question" : "Show Answer"}
      </button>
    </div>
  );
}
