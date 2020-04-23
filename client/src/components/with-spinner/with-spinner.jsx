import React from "react";
import Spinner from "../spinner/spinner";

const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default withSpinner;
