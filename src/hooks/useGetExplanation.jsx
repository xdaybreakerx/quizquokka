import { useState } from "react";


/**
 * A function that retrieves an explanation for a given question and answer pair by making a POST request to an external API. It updates the state with the fetched explanation, loading status, and error message as needed. It returns an object containing the getExplanation function, the fetched explanation, loading status, and any error message encountered during the process.
 * @author Xander
 *
 * @export
 * @returns {{ getExplanation: (question: any, answer: any) => any; explanation: any; loading: any; error: any; }} A function that retrieves an explanation for a given question and answer by making a POST request to an external API. It sets the explanation, loading status, and error state based on the response received.
 */
export function useExplainAnswer() {
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getExplanation = async (question, answer) => {
    try {
      setLoading(true); // Start loading when the request begins
      const response = await fetch(
        "https://getexplanation-knb4ubh7uq-uc.a.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question, // Separate question and answer fields
            answer,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching explanation");
      }

      const data = await response.json();

      setExplanation(data.explanation); 
      // Set the explanation in state
    } catch (err) {
      console.error("Error fetching explanation:", err);
      // Set error if the request fails
      setError(err.message || "Error fetching explanation"); 
    } finally {
    // End loading when the request finishes
      setLoading(false); 
    }
  };

  return { getExplanation, explanation, loading, error };
}
