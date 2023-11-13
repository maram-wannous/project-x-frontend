import { AdminProjects_Projects } from "../Components/AdminProjects_Projects/AdminProjects_Projects";
import { TeamMember } from "../Components/TeamMember/TeamMember";
import { AdminAllProjects } from "./AdminAllProjects";
import './AdminProjects.css'
import { TaskDash } from './../../../../Components/TaskDash/TaskDash';
import { CardProject } from "../../../../Components/CardProject/CardProject";
import { Performance } from './../../../../Components/Performance/Performance';

export default function AdminProjects() {
    return (
        <div className="">
            <div className="sa_divTitle">
                <p className="sa_title">Projects</p>
            </div>
            <div className="sa_divBody gap-1">
                <div className="sa_divStaPerfTMem d-flex justify-content-center align-items-center flex-wrap gap-2">
                    <div className="sa_divProjectsStats">
                        <TaskDash />
                    </div>
                    <div className="sa_divPerformance">
                        {/* <Performance/> */}
                    </div>
                    <div className="sa_divTeamMember py-4">
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