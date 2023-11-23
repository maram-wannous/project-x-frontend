import {Outlet} from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidbar from "../../../Components/Sidbar/Sidbar";
import './dashboard.css'
// import ProjectDash from "../../../Components/ProjectDash/ProjectDash.jsx";
// import {TaskDash} from "../../../Components/TaskDash/TaskDash.jsx";

export default function Dashboard() {

    return (
        <div className="mr-dashboard">``
            <Navbar/>
            <Sidbar/>
            <div className="mr-outlet">
                <Outlet/>
            </div>
        </div>
    );
}



