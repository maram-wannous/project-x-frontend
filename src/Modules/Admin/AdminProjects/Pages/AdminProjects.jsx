import { AdminProjects_Projects } from "../Components/AdminProjects_Projects/AdminProjects_Projects";
import { TeamMember } from "../Components/TeamMember/TeamMember";
import './AdminProjects.css'
import { TaskDash } from './../../../../Components/TaskDash/TaskDash';

export default function AdminProjects() {
    return (
        <div className="container-fluid">
            <div>
                <h1 className="header-style">Projects</h1>
            </div>
            <div className="sa_divBody">
                <div className="d-flex justify-content-start align-items-start flex-wrap gap-1 sa_divStaPerfTMem ">
                    <div className="mr-left-top-content">
                        <div className="sa_divProjectsStats">
                            <TaskDash />
                        </div>
                        <div className="sa_divPerformance">
                            {/* <Performance/> */}
                        </div>
                    </div>
                    <div className="sa_divTeamMember">
                        <TeamMember/>
                    </div>
                </div>
                <div className="sa_divProjects">
                    <AdminProjects_Projects />
                </div>
            </div>

        </div>
        // <div>
        //     <AdminAllProjects/>
        // </div>
    )
}