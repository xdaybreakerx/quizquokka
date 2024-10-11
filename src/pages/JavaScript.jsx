import Layout from "@/components/Layout/Layout";
import FlashCardController from "@/components/FlashCardController/FlashCardController";
import { useFetchFlashcards } from "@/hooks/useFetchFlashCards";
import { ProgressBarWrapper } from "@/components/ProgressBarWrapper/ProgressBarWrapper";


/**
 * A default function component that renders the JavaScript page. It fetches flashcards related to JavaScript using the 'useFetchFlashcards' hook, displays a title 'JavaScript' in a specific style, a progress bar with loading indicator, and a FlashCardController component with the fetched flashcards.
 * @author Xander
 *
 * @export
 * @returns {*} A function that renders a JavaScript page with flashcards fetched using useFetchFlashcards hook and displays a progress bar with the flashcards. It uses the Layout, ProgressBarWrapper, and FlashCardController components to structure the page.
 */
export default function JavaScriptPage() {
  const {
    data: flashcards,
    loading,
    progress,
  } = useFetchFlashcards("flashcards", "javascript");

  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">JavaScript</h1>
      <div className="flex justify-center">
        <ProgressBarWrapper loading={loading} progress={progress}>
          <FlashCardController questionBank={flashcards} />
        </ProgressBarWrapper>
      </div>
    </Layout>
  );
}
