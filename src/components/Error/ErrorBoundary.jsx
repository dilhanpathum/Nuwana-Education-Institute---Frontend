import React from 'react';
import Error from './Error'; // Custom error component

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to the console
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a generic fallback UI instead of the actual error message
      return <Error />; // You can customize this further if needed
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;