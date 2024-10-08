import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase"; 

export function useFetchFlashcards(collection, document) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // For progress bar

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProgress(30); // Initial progress
        const docRef = doc(db, collection, document);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data().questions);
        } else {
          console.log("No such document!");
        }
        setProgress(100); // Complete loading
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [collection, document]);

  return { data, loading, progress };
}
