import React, { Suspense } from 'react';

// import Loader from 'react-loaders';

import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
 
    const token = localStorage.getItem("KOSMO_client_token")
  return token
    ? <Navigate to="/dashboard" replace />
    : ( 
        <Outlet /> 
    );
    
};

export default PublicRoutes;