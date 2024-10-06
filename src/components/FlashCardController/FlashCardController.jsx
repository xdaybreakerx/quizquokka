import { useState } from "react";
import FlashCard from "../../components/FlashCard/FlashCard";

export default function FlashCardController({ questionBank }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questionBank.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + questionBank.length) % questionBank.length
    );
  };

  const { question, answer } = questionBank[currentIndex];

  return (
    <div>
      <FlashCard question={question} answer={answer} />
      <div>
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}
