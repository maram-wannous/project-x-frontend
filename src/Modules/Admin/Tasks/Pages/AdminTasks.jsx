import { Link } from "react-router-dom";

export default function AdminTasks() {
    return(
        <div>
            <Link to={'/dashboard/tasks/subtask'}><button>go toSubTask</button></Link>
            <Link to={'/dashboard/tasks/assigntask'}><button>go AssignTask</button></Link>
        </div>
    )
}