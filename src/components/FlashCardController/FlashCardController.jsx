import { useState } from "react";
import FlashCard from "@/components/FlashCard/FlashCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function FlashCardController({ questionBank }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("question"); // Track the active tab

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

  const { question, answer } = questionBank[currentIndex];

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
