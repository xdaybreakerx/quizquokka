import { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; 
import { Progress } from "@/components/ui/progress"; 

export default function DSAPage() {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); 

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        // Start the loading process with the progress bar
        setProgress(30); // Initial progress
        const docRef = doc(db, "flashcards", "dsa");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFlashcards(docSnap.data().questions);
        } else {
          console.log("No such document!");
        }
        setProgress(99); // Completion of loading
        setLoading(false);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
        setProgress(100); // In case of an error, complete the progress bar
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">
        Data Structures & Algorithms
      </h1>
      <div className="flex justify-center">
        {loading ? (
          <div className="w-full flex flex-col items-center">
            {/* Show progress bar while loading */}
            <Progress value={progress} className="w-[60%]" />
            <p className="mt-2">Loading flashcards...</p>
          </div>
        ) : (
          <FlashCardController questionBank={flashcards} />
        )}
      </div>
    </Layout>
  );
}
