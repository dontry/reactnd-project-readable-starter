import React, { Component } from "react";
import Error404 from "./Error404";

const ErrorPage = props => {
  const errorCode = props.match.params.errorCode;
  if (errorCode === "404") {
    return (
      <div>
        <Error404 />
      </div>
    );
  }
};

export default ErrorPage;
