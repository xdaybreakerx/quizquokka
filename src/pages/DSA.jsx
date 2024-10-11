import Layout from "@/components/Layout/Layout";
import FlashCardController from "@/components/FlashCardController/FlashCardController";
import { ProgressBarWrapper } from "@/components/ProgressBarWrapper/ProgressBarWrapper";
import { useFetchFlashcards } from "@/hooks/useFetchFlashCards";


/**
 * A default functional component to render a page for Data Structures and Algorithms (DSA). It fetches flashcards related to DSA using useFetchFlashcards, and renders a layout with a title, progress bar wrapper, and FlashCardController component.
 * @author Xander
 *
 * @export
 * @returns {*} A React component for the Data Structures & Algorithms (DSA) page. Displays a layout with a title, progress bar, and flashcards retrieved from a fetch operation.
 */
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
