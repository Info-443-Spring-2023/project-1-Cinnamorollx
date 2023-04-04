import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthControl({currentProfile, children}) {
    if (!currentProfile) {
        return <Navigate to={"/"}/>
    }

    return (
        <>
            {children}
        </>
    )
}