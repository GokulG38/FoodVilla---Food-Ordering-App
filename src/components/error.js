import { useRouteError } from "react-router-dom"


const Error=()=>{
const err=useRouteError()

    return(

        <>
        <h3>Oops</h3>
        <h4>{err.status}</h4>
        </>

    )
}

export default Error