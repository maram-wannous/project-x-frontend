/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Error403 from "./Error403";

export default function RequireAuth({allowedRole}) {

    const token = true;
    const user = {
        name: 'maram',
        role: 'admin'
    };


    
    return(
        token ? user === "" ? (<HashLoader color="#36d7b7" />) : 
        user.role === allowedRole? 
        (<Outlet />) :
        (<Error403 />)
        
        : (<Navigate to={"/"} replace={true} />)
    );
}