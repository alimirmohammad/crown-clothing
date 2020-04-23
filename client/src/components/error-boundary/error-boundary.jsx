import React, { Component } from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";
import errorImageSrc from "../../assets/error.png";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("error", error);
    console.log("info", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={errorImageSrc} />
          <ErrorImageText>Sorry, this page is broken!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}
