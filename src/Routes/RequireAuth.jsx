/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Error403 from "./Error403";

// import { useState } from "react";





export default function RequireAuth({allowedRole}) {

    // const [user, setUser] = useState("");
    // console.log(user);
    // const navigate = useNavigate();

    // fetch('https://dummyjson.com/users/1')
    // .then(res => res.json())
    // .then((data)=> setUser(data.data))
    // .catch(() => navigate(("/login"), {replace: true}));
    
    // const token = localStorage.getItem('token');
    // localStorage.setItem('projectx', token);

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