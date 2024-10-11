import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useExplainAnswer } from "@/hooks/useGetExplanation";


/**
 * A function component that displays an alert dialog with an explanation for a given question and answer. It triggers a fetch for the explanation when a button is clicked showing loading status, error message, or the explanation itself. The user can continue after viewing the explanation.
 * @author Xander
 *
 * @export
 * @param {{ question: any; answer: any; }} param0 An object containing the question and answer
 * @param {*} param0.question The question for which the explanation is needed
 * @param {*} param0.answer The answer to the question
 * @returns {*} Component that displays an alert dialog with a trigger button to fetch and display an explanation for a given question and answer.
 */
export function AnswerAlert({ question, answer }) {
  const { getExplanation, explanation, loading, error } = useExplainAnswer();

  // Fetch the explanation when the modal is opened
  const handleExplainClick = () => {
    getExplanation(question, answer);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" onClick={handleExplainClick}>
          Explain the answer
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-foreground">Here's a simple explanation...</AlertDialogTitle>
          <AlertDialogDescription>
            {loading && <span>Loading explanation...</span>}
            {error && <span>Error: {error}</span>}
            {explanation && <span>{explanation}</span>}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
