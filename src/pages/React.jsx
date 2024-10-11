import Layout from "@/components/Layout/Layout";
import FlashCardController from "@/components/FlashCardController/FlashCardController";
import { useFetchFlashcards } from "@/hooks/useFetchFlashCards";
import { ProgressBarWrapper } from "@/components/ProgressBarWrapper/ProgressBarWrapper";


/**
 * A React component that fetches flashcards related to React using the useFetchFlashcards hook and displays them. It renders a layout with a heading 'React', a progress bar, and a FlashCardController component.
 * @author Xander
 *
 * @export
 * @returns {*} This function renders a React page with a title, progress bar, and flashcard controller using the fetched flashcards data.
 */
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
