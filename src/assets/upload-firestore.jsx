import { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

import { dataStructuresAlgosFlashCards } from "./dsa-flash";
import { jsFlashCards } from "./js-flash";
import { pyFlashCards } from "./py-flash";
import { reactFlashCards } from "./react-flash";

export default function StoreFlashcards() {

    useEffect(() => {
        const storeQuestions = async () => {
            try {
                // Write DSA flashcards
                const dsaDocRef = doc(db, "flashcards", "dsa");
                await setDoc(dsaDocRef, { questions: dataStructuresAlgosFlashCards });
                console.log("DSA Flashcards saved!");

                // Write JavaScript flashcards
                const jsDocRef = doc(db, "flashcards", "javascript");
                await setDoc(jsDocRef, { questions: jsFlashCards });
                console.log("JavaScript Flashcards saved!");

                // Write Python flashcards
                const pyDocRef = doc(db, "flashcards", "python");
                await setDoc(pyDocRef, { questions: pyFlashCards });
                console.log("Python Flashcards saved!");

                // Write React flashcards
                const reactDocRef = doc(db, "flashcards", "react");
                await setDoc(reactDocRef, { questions: reactFlashCards });
                console.log("React Flashcards saved!");

                console.log("All flashcards have been successfully saved to Firestore!");
            } catch (error) {
                console.error("Error writing flashcards to Firestore: ", error);
            }
        };

        storeQuestions();  // Execute when component mounts
    }, []);  // Empty dependency array ensures this runs only once

    return (
        <div>
            <h1>Storing Flashcards...</h1>
        </div>
    );
}