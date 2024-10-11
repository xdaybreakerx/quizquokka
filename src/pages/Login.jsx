import LoginForm from "@/components/Auth/Login/Login";
import Layout from "@/components/Layout/Layout";


/**
 * A function that returns the LoginPage component, which consists of a Layout component containing a LoginForm component.
 * @author Xander
 *
 * @export
 * @returns {*} This function represents a login page component that renders a Layout component containing a LoginForm component.
 */
export default function LoginPage(){
    return(
        <Layout>
            <LoginForm />
        </Layout>
    )
}