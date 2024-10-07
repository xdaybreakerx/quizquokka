import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { jsFlashCards } from "../assets/js-flash";

export default function DSAPage() {
  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">JavaScript</h1>
      <div className="flex justify-center">
        <FlashCardController questionBank={jsFlashCards} />
      </div>
    </Layout>
  );
}
