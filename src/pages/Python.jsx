import Layout from "@/components/Layout/Layout";
import FlashCardController from "@/components/FlashCardController/FlashCardController";
import { ProgressBarWrapper } from "@/components/ProgressBarWrapper/ProgressBarWrapper";
import { useFetchFlashcards } from "@/hooks/useFetchFlashCards";


/**
 * A default function component called PythonPage. It fetches flashcard data for the 'python' category using the useFetchFlashcards hook. It renders a Layout component with a title 'Python', a ProgressBarWrapper component with loading and progress props, and a FlashCardController component with flashcards as the questionBank prop.
 * @author Xander
 *
 * @export
 * @returns {*} A React component for displaying a page dedicated to Python content. It fetches flashcards related to Python using the useFetchFlashcards hook and renders a layout with a title, progress bar, and flashcard controller.
 */
export default function PythonPage() {
  const {
    data: flashcards,
    loading,
    progress,
  } = useFetchFlashcards("flashcards", "python");

  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">Python</h1>
      <div className="flex justify-center">
        <ProgressBarWrapper loading={loading} progress={progress}>
          <FlashCardController questionBank={flashcards} />
        </ProgressBarWrapper>
      </div>
    </Layout>
  );
}
