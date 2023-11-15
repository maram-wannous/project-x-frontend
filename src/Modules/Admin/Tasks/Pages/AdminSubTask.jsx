import { Link } from "react-router-dom";

export default function AdminSubTask() {
    return(
        <div>
            <div>Admin Sub Task</div>
            <Link to={'/dashboard/tasks/assigntask'}><button>go AssignTask</button></Link>
        </div>
    )
}