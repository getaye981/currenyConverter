import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 text-red-500">Something went wrong with the converter</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;