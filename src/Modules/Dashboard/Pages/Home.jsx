import Performance from "../../../Components/Performance/Performance";
import ProjectDash from "../../../Components/ProjectDash/ProjectDash";
import { TaskDash } from "../../../Components/TaskDash/TaskDash";
import WorkLog from "../../../Components/WorkLog/WorkLog";

export default function Home(){
    return (
        <div>
            <TaskDash/>
            <ProjectDash/>
            <WorkLog/>
            <Performance/>
        </div>
    )
}