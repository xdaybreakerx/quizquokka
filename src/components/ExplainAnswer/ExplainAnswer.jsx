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
          <AlertDialogTitle>Here's a simple explanation...</AlertDialogTitle>
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
