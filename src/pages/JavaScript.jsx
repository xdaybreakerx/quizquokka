import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { jsFlashCards } from "../assets/js-flash";

export default function DSAPage() {
  return (
    <Layout>
      <FlashCardController questionBank={jsFlashCards} />
    </Layout>
  );
}
