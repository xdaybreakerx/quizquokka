import Layout from "@/components/Layout/Layout";

export default function ErrorPage() {
  return (
    <Layout>
      <h1 className="text-4xl uppercase font-bold p-8 text-left">
        We've encountered an error...
      </h1>
      <p className="text-lg text-left px-8">
        The page you are looking for doesn't exist. Please check the URL or return to the homepage.
      </p>
    </Layout>
  );
}