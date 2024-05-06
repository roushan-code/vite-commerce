import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";

const ProtectedRouteAdmin = ({ isAdmin, ...rest }) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  
    // return (
    //     loading === false &&  (
    //         isAuthenticated === false ? <Navigate to="/login" replace/> : (isAdmin === true && user && user.role !== "admin") ? <Navigate to="/login" replace/> : <Outlet/>
    //     )
    // );
    if(loading === false && isAuthenticated){
    return (
        loading === false &&  isAuthenticated === true && isAdmin === true && user && user.role == "admin" ?   <Outlet/> :<Navigate to="/login" replace/> 
        
    );
};
  };
  
  export default ProtectedRouteAdmin;