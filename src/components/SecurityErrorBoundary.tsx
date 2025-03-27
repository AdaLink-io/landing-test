import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class SecurityErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to security monitoring service
    console.error('Security Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="security-error">
            <h2>Something went wrong</h2>
            <p>We've detected a potential security issue. Please try refreshing the page.</p>
            <button onClick={() => window.location.reload()}>Refresh Page</button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default SecurityErrorBoundary;
