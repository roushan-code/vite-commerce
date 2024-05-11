import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";


const PrivateRoute = ({ isAdmin, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
    // return (
    //     loading === false &&  (
    //         isAuthenticated === false ? <Navigate to="/login" replace/> : (isAdmin === true && user && user.role !== "admin") ? <Navigate to="/login" replace/> : <Outlet/>
    //     )
    // );
    
    // Check if loading is false and user is authenticated
    if (loading === false && isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" replace />;
    }
    
  };
  
  export default PrivateRoute;
