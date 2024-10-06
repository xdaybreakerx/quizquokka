import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { dataStructuresAlgosFlashCards } from "../assets/dsa-flash";

export default function DSAPage() {
  return (
    <Layout>
      <FlashCardController questionBank={dataStructuresAlgosFlashCards} />
    </Layout>
  );
}
