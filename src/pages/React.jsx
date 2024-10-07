import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { reactFlashCards } from "../assets/react-flash";

export default function DSAPage() {
  return (
    <Layout>
      <FlashCardController questionBank={reactFlashCards} />
    </Layout>
  );
}
