import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { pyFlashCards } from "../assets/py-flash";

export default function DSAPage() {
  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">Python</h1>
      <FlashCardController questionBank={pyFlashCards} />
    </Layout>
  );
}
