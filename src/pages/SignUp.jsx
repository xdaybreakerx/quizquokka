import Register from "@/components/Auth/Register/Register";
import Layout from "@/components/Layout/Layout";


/**
 * A function that returns a component for the SignUp page. It renders a Layout component with a Register component inside it.
 * @author Xander
 *
 * @export
 * @returns {*} A default function that renders the SignUpPage component which consists of a Layout component containing a Register component.
 */
export default function SignUpPage() {
  return (
    <Layout>
      <Register />
    </Layout>
  );
}
