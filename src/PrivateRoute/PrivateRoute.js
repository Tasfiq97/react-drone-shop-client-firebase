
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,loading}=useAuth()
     if(loading){
         return<CircularProgress />
     }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;