import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import FlashCardController from "@/components/FlashCardController/FlashCardController";
import { ProgressBarWrapper } from "@/components/ProgressBarWrapper/ProgressBarWrapper";
import { Link } from "react-router-dom";
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "@/contexts/AuthContextProvider";

export default function CustomCardPage() {
  const [customFlashcards, setCustomFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { user } = useAuth();

  // Fetch custom flashcards
  const fetchCustomFlashcards = async (userId) => {
    const flashcardsRef = collection(db, "flashcards");
    const q = query(flashcardsRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const customFlashcards = [];
    querySnapshot.forEach((doc) => {
      customFlashcards.push({ id: doc.id, ...doc.data() });
    });

    return customFlashcards;
  };

  useEffect(() => {
    const loadFlashcards = async () => {
      if (user) {
        const cards = await fetchCustomFlashcards(user.uid);
        setCustomFlashcards(cards);
      }
      setLoading(false);
    };

    if (user) {
      loadFlashcards();
    }
  }, [user]);

  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">
        Your custom cards
      </h1>
      <div className="flex justify-center">
        <ProgressBarWrapper loading={loading} progress={progress}>
          {customFlashcards.length === 0 ? (
            <div className="text-center">
              <p>No custom flashcards found.</p>
              <Link to="/add-card" className="text-blue-500">
                Add a Flashcard?
              </Link>
            </div>
          ) : (
            <FlashCardController questionBank={customFlashcards} />
          )}
        </ProgressBarWrapper>
      </div>
    </Layout>
  );
}
