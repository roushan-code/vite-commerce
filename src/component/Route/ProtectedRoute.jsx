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
    console.log(loading)
    
    if(loading === false && isAuthenticated){
        return (
            loading === false &&  isAuthenticated === true && isAdmin === false ?   <Outlet/> :<Navigate to="/login" replace/> 
            
        );
    }
    
  };
  
  export default PrivateRoute;
