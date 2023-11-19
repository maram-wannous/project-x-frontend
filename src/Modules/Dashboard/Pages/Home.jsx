    import ProjectDash from "../../../Components/ProjectDash/ProjectDash.jsx";
import {TaskDash} from "../../../Components/TaskDash/TaskDash.jsx";
import WorkLog from "../../../Components/WorkLog/WorkLog.jsx";
import Performance from "../../../Components/Performance/Performance.jsx";
import  "./Dashboard.css";

export default function Home(){
    return (
        <div className="mh-100vh RA-bgBlue" >
            <div className="header-style">
                <h1>Dashboard</h1>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <ProjectDash/>
                    </div>
                    <div className="col-md-6 mt-2">
                        <TaskDash/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <WorkLog/>
                    </div>
                    <div className="col-md-6 mt-2">
                       <Performance/>
                    </div>
                </div>
            </div>
        </div>
    )
}