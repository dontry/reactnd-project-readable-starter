import React from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";


const Error404 = () => {
    return (
        <ErrorPage errorCode = "404" />
    )
}


export default Error404;

