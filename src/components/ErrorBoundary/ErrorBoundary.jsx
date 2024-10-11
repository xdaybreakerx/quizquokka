import React from "react";
import Layout from "@/components/Layout/Layout";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <h1 className="text-4xl uppercase font-bold p-8 text-left">
            We've encountered an error...
          </h1>
          <p className="text-lg text-left px-8">
            Something went wrong. Please try refreshing the page or come back
            later.
          </p>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
