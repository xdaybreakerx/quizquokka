import { useState } from "react";

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
