import React from "react";
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAdmin, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
    return (
        loading === false && (
            isAuthenticated === false ? <Navigate to="/login" replace/> : (isAdmin === true && user.role !== "admin") ? <Navigate to="/login" replace/> : <Outlet/>
        )
    );
  };
  
  export default PrivateRoute;
