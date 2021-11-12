import { useEffect, useState } from "react"
import initializeAuhthentication from "../Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword, updateProfile } from "firebase/auth"
initializeAuhthentication()

const useFirebase=()=>{
const [user,setUser]=useState({})
const [loading,setLoading]=useState(true)
const auth = getAuth();


const signinEmaliPass=(email,password,name,location,history)=>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {
      
    const newUser={email,displayName:name}
    setUser(newUser);
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
      }).catch((error) => {
       
      });
          
    }) 
    .catch((error) => {
     
    })
    .finally(()=>setLoading(false))

    
}

useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
          
        setUser(user)
          
        } else {
        setUser({})
        }
        setLoading(false)
        return unsubscribe;
    });

},[]);


// login 

const login=(email,password,location,history)=>{
    const auth = getAuth();
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const redirect=location?.state?.from || "/"
    history.push(redirect);

  })
  .catch((error) => {
    
  })
  .finally(()=>setLoading(false))
}

// signout 

const logout=()=>{
    setLoading(true)
signOut(auth).then(() => {
//  setUser({})
}).catch((error) => {
  
})
.finally(setLoading(false))
}

return {
    user,
    signinEmaliPass,
    logout,
    login,
    loading
}
}

export default useFirebase;