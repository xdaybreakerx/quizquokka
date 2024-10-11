import React from "react";
import Layout from "@/components/Layout/Layout";


/**
 * A class called ErrorBoundary that extends React.Component. ErrorBoundary does not support function components. It handles errors in its children components. It has a constructor that sets the initial state with hasError set to false. It has a static method getDerivedStateFromError that returns the updated state with hasError set to true when an error occurs. It has a method componentDidCatch that logs the error and error information to the console. It has a render method that renders the children components if no error has occurred, or a layout with an error message if an error has occurred.
 * @author Xander
 *
 * @class ErrorBoundary
 * @typedef {ErrorBoundary}
 * @extends {React.Component}
 */
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
