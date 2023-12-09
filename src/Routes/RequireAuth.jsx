/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import Error403 from "./Error403";
import Loading from "./Loading";

export default function RequireAuth({allowedRole}) {

    const token = true;
    const user = {
        name: 'maram',
        role: 'admin'
    };


    
    return(
        token ? user === "" ? (<Loading/>) : 
        user.role === allowedRole? 
        (<Outlet />) :
        (<Error403 />)
        
        : (<Navigate to={"/"} replace={true} />)
    );
}