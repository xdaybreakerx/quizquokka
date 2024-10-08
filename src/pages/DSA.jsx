import Layout from "@/components/Layout/Layout";
import FlashCardController from "@/components/FlashCardController/FlashCardController";
import { ProgressBarWrapper } from "@/components/ProgressBarWrapper/ProgressBarWrapper";
import { useFetchFlashcards } from "@/hooks/useFetchFlashCards";

export default function DSAPage() {
  const {
    data: flashcards,
    loading,
    progress,
  } = useFetchFlashcards("flashcards", "dsa");

  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">
        Data Structures & Algorithms
      </h1>
      <div className="flex justify-center">
        <ProgressBarWrapper loading={loading} progress={progress}>
          <FlashCardController questionBank={flashcards} />
        </ProgressBarWrapper>
      </div>
    </Layout>
  );
}
