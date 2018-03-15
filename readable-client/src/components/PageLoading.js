import React, { Component } from "react";
import Loading from "react-loading";

const PageLoading = ({ type = "spin", color = "#222" }) => (
  <div className="loading-wrapper">
    <Loading delay={200} type={type} color={color} className="loading" />
  </div>
);

export default PageLoading;