import { useContext } from "react"
import { AllContext } from "../AuthContext/AuthProvider"

const useAuth=()=>{
    return useContext(AllContext)
}
export default useAuth;