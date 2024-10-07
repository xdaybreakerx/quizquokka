import Layout from "../components/Layout/Layout";
import FlashCardController from "../components/FlashCardController/FlashCardController";
import { reactFlashCards } from "../assets/react-flash";

export default function DSAPage() {
  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">React</h1>
      <div className="flex justify-center">
        <FlashCardController questionBank={reactFlashCards} />
      </div>
    </Layout>
  );
}
