import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AllContext=createContext()
 
const AuthProvider = ({children}) => {
    const authVal=useFirebase()
    return (
       <AllContext.Provider value={authVal}>
     {
         children
     }
       </AllContext.Provider>
    );
};

export default AuthProvider;