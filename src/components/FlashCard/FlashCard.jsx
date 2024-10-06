import { useState } from "react";
import "./FlashCard.css";

export default function FlashCard() {
  const [isRotated, setIsRotated] = useState(false);

  const toggleCard = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="flash-card">
      <div className={`flash-card-inner ${isRotated ? "rotate" : ""}`}>
        <div className="flash-card-question">
          <h1>Question</h1>
          <p className="question-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            maiores sunt optio, voluptate iste saepe. Praesentium quasi
            distinctio illum laboriosam? Pariatur perspiciatis at voluptatibus
            commodi accusantium eaque quod minus explicabo?
          </p>
        </div>
        <div className="flash-card-answer">
          <h1>Answer</h1>
          <p className="answer-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur iste voluptate deleniti quod neque omnis accusamus
            nostrum iure dicta ex ratione voluptatem aperiam modi itaque
            dolorem, vel fugit aliquam placeat.
          </p>
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
