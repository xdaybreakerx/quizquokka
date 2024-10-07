import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { dataStructuresAlgosFlashCards } from "../assets/dsa-flash";

export default function DSAPage() {
  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">Data Structures & Algorithms</h1>
      <div className="flex justify-center">
        <FlashCardController questionBank={dataStructuresAlgosFlashCards} />
      </div>
    </Layout>
  );
}
