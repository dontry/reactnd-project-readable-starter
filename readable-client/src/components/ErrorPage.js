import React from "react";
import { Link } from "react-router-dom";

const styles = {
  page: {
    margin: 100
  },
  link: {
      color: "#3c6cab"
  }
};

const Error = ({ errorCode = "" }) => {
  return (
    <div style={styles.page}>
      <h3>
        Oops, Error {errorCode}.<code />
      </h3>
      <h4>
        Go back to <Link to="/" style={styles.link}>Homepage</Link>
      </h4>
    </div>
  );
};

export default Error;
