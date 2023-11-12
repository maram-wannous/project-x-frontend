import ProjectDash from "../../../Components/ProjectDash/ProjectDash.jsx";
import {TaskDash} from "../../../Components/TaskDash/TaskDash.jsx";
import WorkLog from "../../../Components/WorkLog/WorkLog.jsx";
import Performance from "../../../Components/Performance/Performance.jsx";


export default function Home(){
    return (
        <div>
            <div className="header-style">
                <h1>Dashboard</h1>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-6">
                        <ProjectDash/>
                    </div>
                    <div className="col-md-6">
                        <TaskDash/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <WorkLog/>
                    </div>
                    <div className="col-md-6">
                       <Performance/>
                    </div>
                </div>
            </div>
        </div>
    )
}