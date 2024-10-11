import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase"; 


/**
 * A custom hook that fetches flashcards data from a Firestore collection and document. It manages the state of data, loading status, and progress of the fetch operation. It uses useEffect to trigger the data fetching process on collection or document change. Returns an object containing the fetched data, loading status, and progress percentage.
 * @author Xander
 *
 * @export
 * @param {*} collection The name of the collection to fetch flashcards from
 * @param {*} document The name of the document to fetch flashcards from
 * @returns {{ data: any; loading: any; progress: any; }} A custom React hook that fetches flashcards data from a specified Firestore collection and document. It returns an object containing the fetched data, loading state, and progress percentage of the fetching process.
 */
export function useFetchFlashcards(collection, document) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // For progress bar
  const [progress, setProgress] = useState(0); 

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
