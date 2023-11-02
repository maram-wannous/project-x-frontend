import { Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidbar from "../../../Components/Sidbar/Sidbar";


export default function Dasboard(){

    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Sidbar/>
        </div>
    );
}



