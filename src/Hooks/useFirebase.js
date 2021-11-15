import { useEffect, useState } from "react"
import initializeAuhthentication from "../Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword, updateProfile } from "firebase/auth"
initializeAuhthentication()

const useFirebase=()=>{
const [user,setUser]=useState({})
const [loading,setLoading]=useState(true)
const auth = getAuth();
const [isAdmin,setIsAdmin]=useState(false)


const signinEmaliPass=(email,password,name,location,history)=>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
        
    .then((userCredential) => {
      
    const newUser={email,displayName:name}
    setUser(newUser);
    saveUser(email,name);
    history.push("/")
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

useEffect(()=>{
  fetch(`https://still-mesa-21488.herokuapp.com/users/admin/${user.email}`)
  .then(res=>res.json())
  .then(data=>setIsAdmin(data.admin))
},[user?.email])
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

const saveUser=(email,displayName)=>{
    const user={email,displayName}
    fetch("https://still-mesa-21488.herokuapp.com/users",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(user)

    })
}

return {
    user,
    isAdmin,
    signinEmaliPass,
    logout,
    login,
    loading
}
}

export default useFirebase;