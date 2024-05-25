import UserContext from "../utils/userContext"
import { useContext } from "react"

Footer=()=>{
    const {user}=useContext(UserContext)
    return(
        <>
        <div>
        <h3>.</h3>
        </div>
        </>
    )
}


export default Footer