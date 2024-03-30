import { Component, ErrorInfo, ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

interface StateType {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<PropsType, StateType> {
  public state: StateType = {
    hasError: false,
    error: null,
  };

  // This lifecycle is invoked after an error has been thrown by a descendant component.
  public static getDerivedStateFromError(error: Error): StateType {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  // This lifecycle is invoked after an error has been thrown by a descendant component.
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2>Something went wrong. Please try reloading the page.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
