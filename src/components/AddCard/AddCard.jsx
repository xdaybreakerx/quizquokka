import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { getAuth } from "firebase/auth";

// Define schema using zod
const FormSchema = z.object({
  question: z
    .string()
    .min(10, {
      message: "Question must be at least 10 characters long.",
    })
    .max(160, {
      message: "Question must not be longer than 160 characters.",
    }),
  answer: z
    .string()
    .min(10, {
      message: "Answer must be at least 10 characters long.",
    })
    .max(500, {
      message: "Answer must not be longer than 500 characters.",
    }),
});


/**
 * Async function that saves a flashcard to Firestore if the user is logged in. It retrieves the current user authentication, then saves the provided question, answer, and user UID to the 'flashcards' collection in Firestore. It marks the flashcard as user-generated and displays a success toast. If an error occurs, it logs the error and displays an error toast.
 * @author Xander
 *
 * @async
 * @param {*} data An object containing question and answer for the flashcard
 * @returns {*} Asynchronous function that saves a new flashcard to Firestore with question, answer, and user ID. Displays success/error toasts based on submission outcome.
 */
export function AddFlashCardForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        toast.error("You need to be logged in to submit flashcards");
        throw new Error("You need to be logged in to submit flashcards");
      }

      // Save question, answer, and user UID to Firestore
      await addDoc(collection(db, "flashcards"), {
        question: data.question,
        answer: data.answer,
        userId: user.uid,
        createdAt: new Date(), // this isnt currently used but may be in the future
        isDefault: false, // Mark this flashcard as user-generated
      });

      toast.success("Flashcard submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Error saving flashcard:", error);
      toast.error("Failed to submit flashcard. Try again.");
    }
  };

  return (
    <div>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">
        Add a custom card
      </h1>
      <div className="p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your question here"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Answer</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide the answer here"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? "Submitting..."
                : "Submit Flashcard"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
