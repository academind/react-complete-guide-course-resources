'use client';

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h2>An error occurred!</h2>
          <p>{this.state.message}</p>
          <p>{this.props.fallback}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
