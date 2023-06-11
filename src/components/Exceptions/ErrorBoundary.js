import { Component } from "react";
import React from 'react';

 class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: {} };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return <div>{this.state.error.message}</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;