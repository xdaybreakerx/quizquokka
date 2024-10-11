import { AddFlashCardForm } from "@/components/AddCard/AddCard";
import Layout from "@/components/Layout/Layout";


/**
 * A function that renders the AddCardPage component, which contains a layout component and an AddFlashCardForm component.
 * @author Xander
 *
 * @export
 * @returns {*} A function that returns the JSX code for the AddCardPage component, which includes a Layout component containing an AddFlashCardForm component.
 */
export default function AddCardPage() {
  return (
    <Layout>
      <AddFlashCardForm />
    </Layout>
  );
}
