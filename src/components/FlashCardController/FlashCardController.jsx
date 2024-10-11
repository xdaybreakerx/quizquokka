import { useEffect, useState } from "react";
import FlashCard from "@/components/FlashCard/FlashCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


/**
 * A controller function for managing flashcards. Controls the display of flashcards from a question bank. Provides functionality to navigate to the next and previous flashcards, and handle pagination clicks. Resets the current index when the question bank is updated. Handles cases where no flashcards are available. Ensures the current index is valid before displaying the flashcard content.
 * @author Xander
 *
 * @export
 * @param {{ questionBank: any; }} param0 An object containing the questionBank array
 * @param {*} param0.questionBank
 * @returns {*} A controller function for managing flashcards. Includes functions for navigating to the next and previous flashcards, handling pagination clicks, and rendering the flashcard and pagination components based on the current index and question bank data.
 */
export default function FlashCardController({ questionBank }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("question"); // Track the active tab

  // Reset currentIndex when questionBank is updated
  useEffect(() => {
    if (questionBank.length > 0) {
      setCurrentIndex(0); // Reset to the first card
    }
  }, [questionBank]);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questionBank.length);
    setActiveTab("question"); // Reset to question tab
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + questionBank.length) % questionBank.length
    );
    setActiveTab("question"); // Reset to question tab
  };

  const handlePaginationClick = (index) => {
    setCurrentIndex(index);
    setActiveTab("question"); // Reset to question tab
  };

  // Check if the questionBank has cards
  if (questionBank.length === 0) {
    return <p>No flashcards available. Please add some.</p>;
  }

  // Ensure the currentIndex is valid before destructuring
  const { question, answer } = questionBank[currentIndex] || {};

  return (
    <div>
      <FlashCard
        question={question}
        answer={answer}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={prevCard} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={nextCard} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
