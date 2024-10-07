import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { pyFlashCards } from "../assets/py-flash";

export default function DSAPage() {
  return (
    <Layout>
      <FlashCardController questionBank={pyFlashCards} />
    </Layout>
  );
}
