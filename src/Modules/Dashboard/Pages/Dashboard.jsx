import { Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidbar from "../../../Components/Sidbar/Sidbar";
import './dashboard.css'

export default function Dashboard(){

    return(
        <div className="mr-dashboard">
            <Navbar/>
            <div className="d-flex gap-3" style={{marginTop: "70px"}}>
                <Sidbar/>
                <div className="container-fluid mr-outlet">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}



