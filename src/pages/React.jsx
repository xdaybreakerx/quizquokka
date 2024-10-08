import Layout from "@/components/Layout/Layout";
import FlashCardController from "@/components/FlashCardController/FlashCardController";
import { useFetchFlashcards } from "@/hooks/useFetchFlashCards";
import { ProgressBarWrapper } from "@/components/ProgressBarWrapper/ProgressBarWrapper";

export default function ReactPage() {
  const {
    data: flashcards,
    loading,
    progress,
  } = useFetchFlashcards("flashcards", "react");

  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">React</h1>
      <div className="flex justify-center">
        <ProgressBarWrapper loading={loading} progress={progress}>
          <FlashCardController questionBank={flashcards} />
        </ProgressBarWrapper>
      </div>
    </Layout>
  );
}
