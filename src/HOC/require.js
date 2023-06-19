import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Require({ children }) {
    const location = useLocation();
    const valid = useSelector(state => state.user.isValid)

    if (valid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location, message: "Please login your account, to be able to buy goods" }} />
}